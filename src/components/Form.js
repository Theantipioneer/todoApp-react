import React, {useState} from "react";

export const Form = ({setInputText, todos, setTodos, inputText, setStatus, setFilteredTodos}) => {

    const submitTodo = (e) => {
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            text: inputText,
            completed: false,
        };

        setTodos([...todos, newTodo]);

        // Clear input after we added a new todo. Wouldn't a useEffect work nicely here?
        setInputText("");
    }
// This input tag needs to be connected to the inputText state so that it can render that UI.
    return (
        <form>
            <input type="text" className="todo-input" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <button onClick={submitTodo}className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={(e) => setStatus(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};
