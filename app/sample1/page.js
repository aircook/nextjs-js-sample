"use client";
import Link from "next/link";
import { useState } from "react";

/**
 * Sample1 페이지 컴포넌트
 *
 * 이 컴포넌트는 Sample1 페이지의 UI를 렌더링하며,
 * 페이지 상단에 제목을 표시하고, 하단에 홈 페이지로 돌아가는 링크를 제공합니다.
 *
 * @component
 * @returns {JSX.Element} Sample1 페이지의 JSX
 */
export default function Sample1() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
      setCount(count + 1);
    };

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Sample1 페이지</h1>
            <p className="text-lg mb-4">현재 카운트: {count}</p>
            <button
                onClick={handleIncrement}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                증가
            </button>
            <Link href="/" className="text-blue-600 underline block mt-4">
                홈으로 돌아가기
            </Link>
        </main>
    );
}