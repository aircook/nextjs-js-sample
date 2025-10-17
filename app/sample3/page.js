import Link from "next/link";

/**
 * Sample3 페이지 컴포넌트 (서버 컴포넌트)
 *
 * 이 컴포넌트는 Sample3 페이지의 UI를 렌더링합니다.
 * `loading.js`의 동작을 테스트하기 위해 의도적으로 2초의 딜레이를 줍니다.
 * 페이지 상단에 제목을 표시하고, 하단에 홈 페이지로 돌아가는 링크를 제공합니다.
 *
 * @returns {Promise<JSX.Element>} Sample3 페이지의 JSX
 */
export default async function Sample3() {
    // 일부러 딜레이를 주는 예시
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">Sample3</h1>
            <p>Welcome to the sample3 page!</p>
            <p>This page used to test loading.js</p>
            <Link href="/" className="text-blue-600 underline block mt-4">
                홈으로 돌아가기
            </Link>
        </main>
    );
}