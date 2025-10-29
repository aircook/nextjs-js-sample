"use client";

import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

/**
 * WebSocket 채팅 컴포넌트
 *
 * Spring Boot WebSocket 서버와 STOMP 프로토콜을 통해 실시간 채팅을 구현합니다.
 */
export default function WebSocket() {
    const [messages, setMessages] = useState([]); // 받은 메시지 목록
    const [input, setInput] = useState(""); // 입력값
    const [stompClient, setStompClient] = useState(null); // STOMP 클라이언트 저장

    useEffect(() => {
        // SockJS 연결 생성 (백엔드: localhost:8080/ws)
        const socket = new SockJS("http://localhost:8080/ws");

        // STOMP 클라이언트 설정
        const client = new Client({
            webSocketFactory: () => socket,
            debug: (str) => console.log(str),
            onConnect: () => {
                // 연결 후 구독
                client.subscribe("/topic/messages", (msg) => {
                    setMessages((prev) => [...prev, msg.body]);
                });
            },
        });

        client.activate();
        setStompClient(client);

        // 언마운트 시 연결 종료
        return () => client.deactivate();
    }, []);

    // 메시지 전송
    const sendMessage = () => {
        if (stompClient && input.trim() !== "") {
            stompClient.publish({ destination: "/app/chat", body: input });
            setInput("");
        }
    };

    // Enter 키 입력 시 메시지 전송
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            {/* ✅ 넓이를 더 키운 채팅창 */}
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    💬 WebSocket Chat
                </h1>

                {/* 메시지 표시 영역 */}
                <div className="h-80 overflow-y-auto border border-gray-200 rounded-lg p-3 mb-4 bg-gray-50">
                    {messages.length === 0 ? (
                        <p className="text-gray-400 text-center">No messages yet</p>
                    ) : (
                        messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className="bg-blue-100 text-blue-800 px-3 py-2 rounded-xl mb-2 w-fit max-w-[80%]"
                            >
                                {msg}
                            </div>
                        ))
                    )}
                </div>

                {/* 입력창 + 전송버튼 */}
                <div className="flex space-x-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown} // ✅ 엔터 입력 처리
                        placeholder="Type a message..."
                        className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition-colors"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
