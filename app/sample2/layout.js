/**
 * Sample2 페이지 레이아웃 컴포넌트
 *
 * 이 컴포넌트는 Sample2 페이지의 레이아웃을 정의합니다.
 * 페이지 상단에 구분선을 추가하고, 자식 컴포넌트를 렌더링합니다.
 *
 * @param {object} props - 컴포넌트에 전달되는 props
 * @param {React.ReactNode} props.children - 내부에 렌더링될 자식 요소
 * @returns {JSX.Element} Sample2 페이지 레이아웃의 JSX
 */
export default function Sample2Layout({ children }) {
    return (
        <div>
            <hr className="sample2bar"/>
            <div>
                {children}
            </div>
        </div>
    );
}