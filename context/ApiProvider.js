"use client";
import React from "react";
import { useApiStore } from "@/store/useApiStore";
import { AlertMessage } from "@/component/AlertMessage";
import { LoadingSpinner } from "@/component/LoadingSpinner";

/**
 * 전역 API 상태 관리 컴포넌트로,
 * 화면 전체에서 발생하는 로딩(스피너) 과 에러(Alert 메시지) 를 자동으로 보여주는 역할
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function ApiProvider({ children }) {
    // Zustand 전역 상태에서 loading, error 값 가져옴
    const { loading, error, clearError } = useApiStore();

    return (
        /*<></> --> <React.Fragment></React.Fragment> 의 축약형*/
        <>
            {children} {/* 실제 페이지나 컴포넌트들을 감싸는 부분 */}
            {loading && <LoadingSpinner />} {/* 로딩 중일 때 스피너 표시 */}
            {error && <AlertMessage message={error} onClose={clearError} />} {/* 에러 발생 시 메시지 표시 */}
        </>
    );
}
