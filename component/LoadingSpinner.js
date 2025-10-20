export function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
            <div className="w-16 h-16 border-4 border-white/50 border-t-white rounded-full animate-spin"></div>
        </div>
    );
}