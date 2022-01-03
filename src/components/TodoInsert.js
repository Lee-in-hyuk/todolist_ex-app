import { useState } from 'react';
import './TodoInsert.scss';

export default function TodoInsert({onInsert}){
    const [ value, setValue ] = useState('');
    function onChange(e){
        setValue(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault(); // 기존에 갖고 있던 이벤트 제거
        onInsert(value); // App.js에 있는 onInsert함수를 props로 받아와서 사용
        setValue(''); //value값 초기화하게 빈 문자열로.
    }
    return(
        <form className='TodoInsert' onSubmit={onSubmit}>
            <input type="text" placeholder='할 일을 입력 후 Enter를 누르세요' value={value} onChange={onChange}/>
            <button type='submit'>
                X
            </button>
        </form>
    );
}