import axios from "axios";
import { useApiStore } from "@/store/useApiStore"; // 로딩/에러 관리용 (옵션)

/**
 * 공통 axios 인스턴스
 * - baseURL, timeout 설정
 */
const api = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    timeout: 5000,
});

/**
 * 🔹 요청 인터셉터
 * - 요청 전 실행
 * - 토큰 헤더 추가, 로딩 상태 관리 등
 */
api.interceptors.request.use(
    (config) => {
        // 예: localStorage에서 토큰 가져오기
        const token = localStorage.getItem("accessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        // Zustand 등으로 글로벌 로딩 상태 관리 가능
        // const { setLoading } = useApiStore.getState();
        // setLoading(true);

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/**
 * 🔹 응답 인터셉터
 * - 응답 후 처리
 * - 에러 공통 처리, 응답 데이터 가공 등
 */
api.interceptors.response.use(
    (response) => {
        // 요청 성공 시 로딩 해제 등
        // const { setLoading } = useApiStore.getState();
        // setLoading(false);

        return response;
    },
    (error) => {
        // 에러 메시지 공통 처리
        //useApiStore.getState() — Hook이 아님, 직접 접근
        const { setError, setLoading } = useApiStore.getState();
        setLoading(false);
        setError(error.response?.data?.message || error.message || "API 요청 실패");

        // 토큰 만료 시 로그아웃 처리 등 가능
        if (error.response?.status === 401) {
            localStorage.removeItem("accessToken");
            // 필요시 redirect 처리
            // window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

export default api;
