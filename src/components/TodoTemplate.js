import './TodoTemplate.scss';
export default function TodoTemplate({children}){
    return(
        <div className="TodoTemplate">
            <div className='header'>
                <h1 className="main-title">2021년 12월 30일</h1>
                <h3 className="sub-title">목요일</h3>
                <p className='title-cnt'>할일 :  개 남음</p>
            </div>
            <div className="content">{children}</div>
        </div>
    );
}