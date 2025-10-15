/**
 * Sample1Layout 컴포넌트
 * @param children - 내부에 렌더링될 자식 요소
 * @returns {JSX.Element} - 레이아웃 JSX
  */
export default function Sample1Layout({ children }) {
    return (
        <div>
            <hr className="sample1bar"/>
            <div>
                {children}
            </div>
        </div>
    );
}