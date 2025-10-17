import Link from "next/link";
import UserList from "./component/UserList";

/**
 * Sample2 페이지 컴포넌트 (서버 컴포넌트)
 *
 * 이 컴포넌트는 Sample2 페이지의 UI를 렌더링합니다.
 * `DataTable` 컴포넌트를 포함하여 데이터를 테이블 형태로 표시합니다.
 * 페이지 상단에 제목을 표시하고, 하단에 홈 페이지로 돌아가는 링크를 제공합니다.
 *
 * @returns {Promise<JSX.Element>} Sample2 페이지의 JSX
 */
export default async function Sample2() {

    return (
        <main className="p-8">
            <h1 className="text-2xl font-bold">Sample2 페이지</h1>
            <UserList />
            <Link href="/" className="text-blue-600 underline block mt-4">
                홈으로 돌아가기
            </Link>
        </main>
    );
}