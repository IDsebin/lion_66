// 커멘트대로 먼저 파일 만들기 전에 branch 만들고 거기에 add 하려고 했는데 nothing to commit이 떠서 일단은 주석 처리로 commit 했습다.

import React,{Component , useState ,useEffect} from 'react';
import './App.css';
import List from './List.js';
import Header from './Header.js';
import styled from 'styled-components';
import Button from './Button';

const AppBlock = styled.div`
  width: 100px;
  position: absolute;
  margin-top:-23px;
  left: 190px;
  padding: 0px;

`
const App = () => {
  const [todos,setTodos] = useState([0]);
  const [newTodo, setNewTodo] = useState();


  const changeInputData = (e) =>{
    setNewTodo(e.target.value);
  }

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos,newTodo]);
  }

  useEffect( () => { 
    console.log("확인",todos);
  },[todos])
  
  const fetchInitialData = async () => {
    const response = await fetch();
    const initialData = await response.json();
    setTodos(initialData)
  }
  return(
    <>
    <Header todos = {todos}/>
    <form action = "">
      <input type="text" name = ""  onChange={changeInputData}/>
      <AppBlock>
        <Button onClick={addTodo}>Button</Button>
      </AppBlock>
    </form>

    <List todos={todos}/>
    </>
  );
}

export default App;
