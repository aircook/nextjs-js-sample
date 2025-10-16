"use client";
import {useState} from "react";

/**
 * 그리드 표현을 위한 클라이언트 컴포넌트
 * @param users
 * @returns {JSX.Element}
 */
export default function DataTable( {users} ) {
    const [selectedId, setSelectedId] = useState(null);

    return (
        <table className="min-w-full border border-gray-300 text-left">
            <thead>
            <tr className="bg-gray-100 border-b">
                <th className="p-2 border-r">ID</th>
                <th className="p-2 border-r">이름</th>
                <th className="p-2 border-r">이메일</th>
                <th className="p-2">도시</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr
                    key={user.id}
                    className={`border-b cursor-pointer ${
                        selectedId === user.id ? "bg-blue-100" : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedId(user.id)}
                >
                    <td className="p-2 border-r">{user.id}</td>
                    <td className="p-2 border-r">{user.name}</td>
                    <td className="p-2 border-r">{user.email}</td>
                    <td className="p-2">{user.address.city}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}