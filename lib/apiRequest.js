import {useApiStore} from "@/store/useApiStore";

/**
 * ✅ 공통 API 요청 헬퍼
 * 모든 axios 호출을 감싸서 자동으로 로딩/에러 관리함
 */
export default async function apiRequest(requestFn) {
    //컴포넌트 외부에서도 Zustand 상태에 접근할 수 있게 해줌.
    const {setLoading, setError} = useApiStore.getState();

    setLoading(true);
    setError(null);

    try {
        const response = await requestFn();
        return response.data;
    } catch (err) {
        console.error("API Error:", err);
        setError(err.message || "요청 중 오류가 발생했습니다.");
        return null;
    } finally {
        setLoading(false);
    }
}
