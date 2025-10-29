import Link from "next/link";
import WebSocket from "./component/web-socket";

/**
 * Sample4 페이지 컴포넌트 (서버 컴포넌트)
 *
 * 이 컴포넌트는 Sample4 페이지의 UI를 렌더링합니다.
  * 페이지 상단에 제목을 표시하고, 하단에 홈 페이지로 돌아가는 링크를 제공합니다.
 *
 * @returns {Promise<JSX.Element>} Sample4 페이지의 JSX
 */
export default async function Sample4() {



    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold">Sample4</h1>
            <p>Welcome to the sample4 page!</p>
            <p>This page used to test web socket</p>
            <WebSocket />
            <Link href="/" className="text-blue-600 underline block mt-4">
                홈으로 돌아가기
            </Link>
        </main>
    );
}