export function AlertMessage({ message, onClose }) {
    return (
        <div className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in">
            ⚠️ {message}
            <button
                className="ml-3 bg-white/20 hover:bg-white/30 px-3 py-1 rounded"
                onClick={onClose}
            >
                닫기
            </button>
        </div>
    );
}