import Image from "next/image";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="text-lg font-semibold">Loading</p>
            <Image
                className="dark:invert"
                src="/loading.gif"
                alt="loading gif"
                width={88}
                height={40}
                priority
                unoptimized
            />
        </div>
    );
}