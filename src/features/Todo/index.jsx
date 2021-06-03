import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';


function TodoFeatures(props) {
    const initTodoList = [
        {
            id : 1,
            title : 'Eat',
            status : 'new',
        },
        {
            id : 2,
            title : 'Code',
            status : 'completed',
        },
        {
            id : 3,
            title : 'Sleep',
            status : 'new'
        }
    ];
    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        console.log(todo,idx);

        newTodoList[idx] = {...newTodoList[idx], 
            status : newTodoList[idx].status === 'new'? 'completed' : 'new',};
            setTodoList(newTodoList);
        }; 
    const handleShowAllClick = () => {
        setFilteredStatus('all');
    };
    const handleShowCompletedClick = () => {
        setFilteredStatus('completed');
    };
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    };

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all' || filteredStatus === todo.status);
    
    const handleTodoFormSubmit = (values) => {
        console.log('Form submit: ', values);
    }

    return (
        <div>
            <h3>What to do?</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <h3>Todo List</h3>
            <TodoList todoList = {renderedTodoList} onTodoClick = {handleTodoClick}/>

            <div>
                <button onClick = {handleShowAllClick}> Show All</button>
                <button onClick = {handleShowCompletedClick}> Show Completed</button>
                <button onClick = {handleShowNewClick}> Show New</button>
            </div>
        </div>
    );
}

export default TodoFeatures;