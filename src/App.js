import React, { useState, useRef } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
function App() {
  const [ todos, setTodos ] = useState([
    {
      id:1,
      text: '프로젝트 생성하기',
      checked: true
    },
    {
      id:2,
      text: '컴포넌트 스타일링하기',
      checked: false
    },
    {
      id:3,
      text: 'Context 만들기',
      checked: false
    },
    {
      id:4,
      text: '기능 구현하기',
      checked: true
    }
  ]);
  //고유값으로 사용될 id
  const nextId = useRef(5);
  
  function onInsert(text){
    const todo = {
      id:nextId.current,
      text,
      checked: false
    }
    setTodos(todos.concat(todo));
    nextId.current = nextId.current+1;
  }

  //해당 id항목 삭제하기
  function onRemove(id){
    setTodos(todos.filter(todo => todo.id !== id));
   }

  //해당 id항목 checked반전
  function onToggle(id){
    setTodos(todos.map(todo=>todo.id === id ? {...todo, checked: !todo.checked } : todo));
  }

  //남은 갯수 props로 템플릿에 넘기는거
  

  const num = todos[0].checked
  console.log(num);


  

  return (
    <div className="App">
      <TodoTemplate>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        <TodoInsert onInsert={onInsert}/>
      </TodoTemplate>
    </div>
  );
}

export default App;
