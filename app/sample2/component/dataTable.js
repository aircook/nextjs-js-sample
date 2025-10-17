"use client";
import {useState, useEffect, useMemo} from "react";

/**
 * 그리드 표현을 위한 클라이언트 컴포넌트
 * @param users
 * @returns {JSX.Element}
 */
export default function DataTable() {
    // 전체 사용자 목록
    const [users, setUsers] = useState([]);
    // 검색어 입력값
    const [search, setSearch] = useState("");
    // 선택된 값, 버튼 클릭 시 표시할 사용자 정보
    //const [selectedId, setSelectedId] = useState(null);
    const [selectedUser, setSelectedUser] = useState({});

    // ✅ 마운트 시 API 한 번만 호출
    // 두 번째 인자로 [](빈 배열)을 넣었기 때문에, 처음 마운트될 때 한 번만 실행돼.
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            // 상태저장
            setUsers(data);
        };
        fetchData();
    }, []);

    // ✅ useMemo로 필터링 최적화 (입력 바뀔 때만 재계산)
    // useMemo()는 연산 결과를 기억(Memoization) 해두는 React Hook, 값 계산 결과 캐싱
    // search나 users가 바뀌었을 때만 필터링 로직을 다시 계산
    const filteredUsers = useMemo(() => {
        // 소문자로 변경하여 비교
        const keyword = search.toLowerCase();
        return users.filter((user) => user.name.toLowerCase().includes(keyword));
    }, [search, users]);

    // ✅ 렌더링
    return (
        <div className="p-8 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">사용자 검색</h1>

            {/* 검색 입력창 */}
            <input
                type="text"
                placeholder="이름을 입력하세요..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* 결과 테이블 */}
            <table className="w-full border border-gray-300 rounded-md text-left">
                <thead className="bg-gray-100">
                <tr>
                    <th className="p-2 border-b">ID</th>
                    <th className="p-2 border-b">이름</th>
                    <th className="p-2 border-b">이메일</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <tr
                            key={user.id}
                            className={`border-b cursor-pointer ${
                                selectedUser.id === user.id ? "bg-blue-100" : "hover:bg-gray-50"
                            }`}
                            onClick={() => setSelectedUser(user)}
                        >
                            <td className="p-2 border-b">{user.id}</td>
                            <td className="p-2 border-b">{user.name}</td>
                            <td className="p-2 border-b">{user.email}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3" className="text-center p-4 text-gray-500">
                            검색 결과가 없습니다.
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            {/* ✅ 선택된 사용자 정보 표시 */}
            {selectedUser && (
                <div className="mt-4 p-4 border rounded-md bg-gray-50">
                    <h2 className="font-bold text-lg mb-2">선택된 사용자 정보</h2>
                    <p><strong>ID:</strong> {selectedUser.id}</p>
                    <p><strong>이름:</strong> {selectedUser.name}</p>
                    <p><strong>이메일:</strong> {selectedUser.email}</p>
                </div>
            )}

        </div>
    );
}