import React from 'react'

interface Props{
    todo: Todo,
    toggle: Toggle
}

const TodoListItem: React.FC<Props> = ({ todo : { text,completed },toggle }) => (
    <li>
        <label
            style={{ textDecoration: completed ? 'line-through' : undefined }}
        >
            <input onClick={()=>toggle({ completed,text })} type="checkbox" checked={completed} /> {text}
        </label>
    </li>
)

export default TodoListItem