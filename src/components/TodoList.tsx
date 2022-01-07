import React from 'react'
import TodoListItem from './TodoListItem';


interface Props {
    todos: Todo[],
    toggle: Toggle
}

const TodoList:React.FC<Props> = ({ todos,toggle }) => (
    <ul>
      {
        React.Children.toArray(
          todos.map( one => <TodoListItem todo={one} toggle={toggle} /> )
        )
      }
    </ul>
)

export default TodoList