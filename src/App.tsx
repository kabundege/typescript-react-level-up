import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const initialTodos: Todo[] = [
  {
    text:'Bathing',
    completed:false
  },  {
    text:'Coding',
    completed:true
  },  {
    text:'Eating',
    completed:false
  }
]

function App() {
  const [ todos,setTodos ] = useState(initialTodos)
  const [ newTodo,setNewTodo ] = useState<Todo>({text:"",completed:false})

  const handlerChange = (todo:Todo) => {
    setTodos( prevTodos => {
      return prevTodos.map( one => {
        if (one.text === todo.text)
        return { ...one, completed: !one.completed }
        else return one
      })
    })
  }

  const handlerSubmit = (ev:React.FormEvent) => {
    ev.preventDefault();
    const exists = todos.find(one => one.text === newTodo.text)

    if(!exists){
      setTodos(prevTodos => ([ ...prevTodos,newTodo ]))
    }else{
      alert('Task Already exists')
    }
    
    setNewTodo(prev=>({ ...prev,text:"" }))
  } 

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TodoList todos={todos} toggle={handlerChange} />
      <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} handlerSubmit={handlerSubmit} />
    </div>
  );
}

export default App;
