import Link from "next/link";

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