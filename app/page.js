import Image from "next/image";
import Link from "next/link";

/**
 * 홈 페이지 컴포넌트
 *
 * 이 컴포넌트는 애플리케이션의 메인 페이지를 렌더링합니다.
 * Next.js 시작을 위한 기본 정보와 Vercel 배포 및 문서 링크를 포함합니다.
 * 또한 샘플 페이지로 이동하는 링크를 제공합니다.
 *
 * @returns {JSX.Element} 홈 페이지의 JSX
 */
export default function Home() {
    return (
        <div
            className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <Image
                    className="dark:invert"
                    src="/next.svg"
                    alt="Next.js logo"
                    width={180}
                    height={38}
                    priority
                />
                <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
                    <li className="mb-2 tracking-[-.01em]">
                        Get started by editing{" "}
                        <code
                            className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                            app/page.js
                        </code>
                        .
                    </li>
                    <li className="tracking-[-.01em]">
                        Save and see your changes instantly.
                    </li>
                </ol>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            className="dark:invert"
                            src="/vercel.svg"
                            alt="Vercel logomark"
                            width={20}
                            height={20}
                        />
                        Deploy now
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
                        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Read our docs
                    </a>
                </div>

                {/* 👇 main과 footer 사이에 링크 삽입 시작 */}
                <div className="my-4 flex gap-4">
                    <ol>
                        <li>
                            <Link href="/sample1" className="text-blue-600 underline">
                                Sample1 페이지로 이동
                            </Link>
                        </li>
                        <li>
                            <Link href="/sample2" className="text-blue-600 underline">
                                Sample2 페이지로 이동
                            </Link>
                        </li>
                        <li>
                            <Link href="/sample3" className="text-blue-600 underline">
                                Sample3 페이지로 이동
                            </Link>
                        </li>
                        <li>
                            <Link href="/sample4" className="text-blue-600 underline">
                                Sample4 페이지로 이동
                            </Link>
                        </li>
                        <li>
                            <Link href="/sample5" className="text-blue-600 underline">
                                Sample5 페이지로 이동
                            </Link>
                        </li>
                    </ol>
                </div>
                {/* 👇 main과 footer 사이에 링크 삽입 끝 */}
            </main>

            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/file.svg"
                        alt="File icon"
                        width={16}
                        height={16}
                    />
                    Learn
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/window.svg"
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Examples
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        aria-hidden
                        src="/globe.svg"
                        alt="Globe icon"
                        width={16}
                        height={16}
                    />
                    Go to nextjs.org →
                </a>
            </footer>
        </div>
    );
}
