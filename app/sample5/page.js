"use client";
import Link from "next/link";

/**
 * Sample5 페이지
 * 단순히 Hello World를 렌더링합니다.
 */
export default function Sample5() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Sample5</h1>
            <p className="text-lg">Hello World</p>
            <Link href="/" className="text-blue-600 underline block mt-4">
                홈으로 돌아가기
            </Link>
        </main>
    );
}
