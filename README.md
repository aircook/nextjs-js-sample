# Next.js 환경 변수 설정 가이드

## .env.development 파일 설정

Next.js 프로젝트에서 환경 변수를 설정하기 위해 `.env.development` 파일을 사용합니다.

### 파일 생성 및 설정

1. 프로젝트 루트 디렉터리에 `.env.development` 파일을 생성합니다.
2. 파일에 다음과 같이 환경 변수를 추가합니다:

```
NEXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com
```

### 환경 변수 설명

- `NEXT_PUBLIC_API_URL`: API의 기본 URL을 설정합니다.
- `NEXT_PUBLIC_` 접두사가 붙은 변수는 클라이언트 사이드(브라우저)에서도 접근할 수 있습니다.
- 현재 설정된 값: `https://jsonplaceholder.typicode.com`

### 사용 방법

axios 인스턴스 생성 시 다음과 같이 사용할 수 있습니다:

```javascript
const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    timeout: 5000,
});
```

### 주의사항

- `.env.development` 파일은 Git에 커밋되지 않도록 `.gitignore`에 추가되어 있어야 합니다.
- 환경 변수 변경 후, Next.js 개발 서버를 재시작해야 합니다.
- 프로덕션 환경에서는 `.env.production` 파일을 사용할 수 있습니다.

### 서버 재시작

환경 변수 변경 후 다음 명령어로 서버를 재시작하세요:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## 프로덕션 환경 배포 시 환경 변수 처리 방법

`.env` 파일들이 Git에 커밋되지 않도록 설정되어 있으므로, 운영서버 배포 시에는 다음과 같은 방법으로 환경 변수를 설정해야 합니다:

### 1. .env.production 파일 사용

프로젝트 루트에 `.env.production` 파일을 생성하고 프로덕션용 환경 변수를 설정합니다:

```
NEXT_PUBLIC_API_URL=https://your-production-api.com
```

이 파일은 로컬에서만 사용되며, Git에 커밋하지 않습니다.

### 2. 빌드 시 환경 변수 설정

빌드 명령어 실행 시 환경 변수를 직접 설정할 수 있습니다:

```bash
NEXT_PUBLIC_API_URL=https://your-production-api.com npm run build
```

### 3. 호스팅 플랫폼의 환경 변수 설정

대부분의 호스팅 플랫폼(Vercel, Netlify, Heroku 등)에서 환경 변수를 설정할 수 있습니다:

#### Vercel 배포 시
- Vercel 대시보드에서 프로젝트 설정 → Environment Variables
- 또는 `vercel env add` 명령어 사용

#### Netlify 배포 시
- Netlify 대시보드에서 Site settings → Environment variables
- 또는 `netlify env:set` 명령어 사용

#### Docker 배포 시
- Dockerfile에서 ENV 명령어 사용
- 또는 docker run 시 --env 옵션 사용

### 4. 서버 환경 변수 직접 설정

서버에서 직접 환경 변수를 설정하는 경우:

```bash
export NEXT_PUBLIC_API_URL=https://your-production-api.com
npm run build
npm start
```

### 권장 사항

1. **민감한 정보는 NEXT_PUBLIC_ 접두사 없이 사용**: API 키, 비밀번호 등은 서버 사이드에서만 사용
2. **환경별 파일 분리**: `.env.development`, `.env.production` 등으로 환경별 설정
3. **호스팅 플랫폼 활용**: 가능하다면 플랫폼의 환경 변수 기능을 사용하는 것이 가장 안전하고 편리합니다.
