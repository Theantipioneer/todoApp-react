import React from 'react'


export const Todo = ({ todo, todos, setTodos}) => {

    const deleteTodo = () => {
        setTodos(todos.filter((item) => item.id !== todo.id))
        
    };

    const completeTodo = () => {
        setTodos(
            todos.map(
                (item) => {
                    if (
                        item.id === todo.id
                    )
                    return{ 
                        ...item, completed: !item.completed
                    }

            return item    }
            )
        )
}
// The cool thing here is that we hooked up some css to a state change of 'completed'
    return (
        <div className='todo '>
            <li className={`todo-item ${todo.completed ? 'completed' : ''}` }>
                {todo.text}
            </li>
            <button className='complete-btn' onClick={completeTodo}>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={deleteTodo} >
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}
