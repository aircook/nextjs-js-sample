import Link from "next/link";

export default function Sample2() {
    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Sample2 페이지</h1>
            <Link href="/" className="text-blue-600 underline block mt-4">
                홈으로 돌아가기
            </Link>
        </main>
    );
}