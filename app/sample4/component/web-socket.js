"use client";

import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";

/**
 * WebSocket 채팅 컴포넌트
 */
export default function WebSocket() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [stompClient, setStompClient] = useState(null);
    const [clientId, setClientId] = useState("");

    const generateRandomId = () => {
        const id = "User-" + Math.random().toString(36).substring(2, 8);
        setClientId(id);
    };

    // 시간 포맷 함수
    const formatTime = (timestamp) => {
        if (!timestamp) return "";
        const date = new Date(timestamp);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    useEffect(() => {
        generateRandomId();

        const socket = new SockJS("http://localhost:8080/ws");
        const client = new Client({
            webSocketFactory: () => socket,
            debug: (str) => console.log(str),
            onConnect: () => {
                client.subscribe("/topic/messages", (msg) => {
                    try {
                        const parsed = JSON.parse(msg.body);
                        setMessages((prev) => [...prev, parsed]);
                    } catch {
                        setMessages((prev) => [...prev, { sender: "Server", message: msg.body, timestamp: new Date().toISOString() }]);
                    }
                });
            },
        });

        client.activate();
        setStompClient(client);
        return () => client.deactivate();
    }, []);

    const sendMessage = () => {
        if (stompClient && input.trim() !== "") {
            const payload = JSON.stringify({
                sender: clientId,
                message: input
            });
            stompClient.publish({ destination: "/app/chat", body: payload });
            setInput("");
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">
                <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">💬 WebSocket Chat</h1>
                <p className="text-center text-gray-500 mb-4">
                    You are <span className="font-semibold text-blue-600">{clientId}</span>
                </p>

                {/* 메시지 표시 영역 */}
                <div className="h-80 overflow-y-auto border border-gray-200 rounded-lg p-3 mb-4 bg-gray-50">
                    {messages.length === 0 ? (
                        <p className="text-gray-400 text-center">No messages yet</p>
                    ) : (
                        messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`px-3 py-2 rounded-xl mb-2 max-w-[80%] ${
                                    msg.sender === clientId
                                        ? "bg-blue-500 text-white self-end ml-auto"
                                        : "bg-gray-200 text-gray-800"
                                }`}
                            >
                <span className="block text-sm font-semibold">
                  {msg.sender === clientId ? "You" : msg.sender}{" "}
                    <span className="text-xs text-gray-500 ml-2">{formatTime(msg.timestamp)}</span>
                </span>
                                <span>{msg.message}</span>
                            </div>
                        ))
                    )}
                </div>

                <div className="flex space-x-2">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
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
