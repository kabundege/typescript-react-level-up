import React from 'react'

type HandlerSubmit = (ev:React.FormEvent) => void;
type SetNewTodo = (todo:Todo) => void;

interface Props {
    handlerSubmit: HandlerSubmit,
    newTodo: Todo,
    setNewTodo: SetNewTodo
}

const TodoForm:React.FC<Props>  = ({ newTodo,handlerSubmit,setNewTodo }) => {
    return (
        <form onSubmit={handlerSubmit}>
        <input type="text" value={newTodo.text} onChange={(ev)=>setNewTodo({...newTodo,text:ev.target.value})} />
        <button type="submit">Add Todo</button>
      </form>
    )
}

export default TodoForm
