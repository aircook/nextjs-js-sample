import Link from "next/link";

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
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Sample1 페이지</h1>
            <Link href="/" className="text-blue-600 underline block mt-4">
                홈으로 돌아가기
            </Link>
        </main>
    );
}