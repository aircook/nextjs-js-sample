/**
 * Sample5
 *
 * Client-side React component that renders a simple page section with:
 * - a main container with padding
 * - a heading ("Sample5")
 * - a greeting paragraph ("Hello World")
 * - a link that navigates back to the home page ("홈으로 돌아가기")
 *
 * 클라이언트 사이드 컴포넌트로, 제목과 간단한 인사 문구 및 홈으로 돌아가는 링크를 렌더링합니다.
 *
 * @component
 * @returns {JSX.Element} The rendered Sample5 component (a <main> element containing heading, paragraph, and a Link).
 */
"use client";
import Link from "next/link";


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
