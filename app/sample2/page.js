import Link from "next/link";
import DataTable from "./component/dataTable";

/**
 * Sample2 페이지 컴포넌트, 서버 컴포넌트
 *
 * 이 컴포넌트는 Sample2 페이지의 UI를 렌더링하며,
 * 페이지 상단에 제목을 표시하고, 하단에 홈 페이지로 돌아가는 링크를 제공합니다.
 *
 * @component
 * @returns {JSX.Element} Sample2 페이지의 JSX
 */
export default async function Sample2() {

    // ✅ 서버에서 fetch 실행 (SSR)
    const res = await fetch("http://jsonplaceholder.typicode.com/users", {
        cache: "no-store", // 항상 최신 데이터 (SSR)
    });

    // 에러가 나도 여기선 catch 안 됨 (status만 확인해야 함)
    if (!res.ok) {
        throw new Error("네트워크 오류!");
    }

    const users = await res.json();

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Sample2 페이지</h1>
            <DataTable users={users} />
            <Link href="/" className="text-blue-600 underline block mt-4">
                홈으로 돌아가기
            </Link>
        </main>
    );
}