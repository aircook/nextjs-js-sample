import {create} from "zustand";

// 전쳑상태
export const useApiStore = create((set) => ({
    loading: false,
    error: null,

    // ✅ 로딩 상태 관리
    setLoading: (value) => set({loading: value}),

    // ✅ 에러 메시지 설정
    setError: (message) => set({error: message}),

    // ✅ 에러 초기화
    clearError: () => set({error: null}),
}));
