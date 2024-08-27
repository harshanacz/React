import { useState, useEffect } from 'react';
import './todolist.css';
import anime from 'animejs';

function TodoList() {
    const [errorMessage, showError] = useState("");
    const [tasks, addTask] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newItems, setNewItems] = useState([]);

    function addNewTasks() {
        if (newTask === "") {
            showError("Please enter a task..");
        } else {
            showError("");
            addTask([...tasks, newTask]);
            setNewItems([newTask]); // Add new task to newItems state
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        addTask(newTasks);
    }

    function getUpTask (index) {
        const newTasks = [...tasks];
        if (index === 0) return;
        [newTasks[index], newTasks[index - 1]] = [newTasks[index - 1], newTasks[index]];
        addTask(newTasks);
    }

    function getDownTask (index) {
        const newTasks = [...tasks];
        if (index === newTasks.length - 1) return;
        [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
        addTask(newTasks);
    }


    useEffect(() => {
        if (newItems.length > 0) {
            anime({
                targets: '.task',
                opacity: [0, 1],
                scale: [0.9, 1],
                duration: 500,
                easing: 'easeOutCubic',
                delay: anime.stagger(400),
                complete: () => setNewItems([]) 
            });
        }
    }, [newItems]);

    return (
        <div className='container'>
            <h1 className='title'>Todo List</h1>
            <p>A simple todo list app built with React. Add a task by typing in the input field and clicking the "Add Task" button.</p>
            <h4 className='error-msg'>{errorMessage}</h4>
            <div className='mainArea'>
                <input className='inputer' value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" />
                <button className='addButton' onClick={addNewTasks}>Add Task</button>
            </div>
            <ul className='tasks'>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <div className='task'>
                            <h5 className='task-title'>{task}</h5>
                            <div className='navigations'>
                                <i style={{ color: 'red' }} onClick={() => deleteTask(index)} className="fas fa-trash"></i>
                                <i onClick={
                                    () => getUpTask(index)
                                } className="fas fa-arrow-up"></i>
                                <i 
                                onClick={
                                    () => getDownTask(index)
                                }
                                className="fas fa-arrow-down"></i>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
