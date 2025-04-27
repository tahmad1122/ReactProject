import React, { useEffect, useRef, useState } from 'react'
import '../components/Todo.css';


function TodoList() {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const [error, setError] = useState('');

    const editInputRef = useRef(null);

    useEffect(() => {
        if (editIndex !== null && editInputRef.current) {
            editInputRef.current.focus();
        }
    },);


    const addTask = () => {
        if (input === "") {
            // console.log("Enter task...");
            // alert("Enter your task...");
            setError('**Please enter your task..');
            // setTimeout(() => {
            //     setError('');
            // }, 5000);


        } else {
            setTasks([...tasks, input])
            setInput('');
            setError("");
        }

    }

    const editTask = (indexToEdit) => {
        setEditIndex(indexToEdit);
        setEditText(tasks[indexToEdit]);
    };

    const saveTask = () => {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = editText;
        setTasks(updatedTasks);
        setEditIndex(null);
        setEditText('');
    };


    function deleteTask(indexToDelete) {
        const mt = setTasks(tasks.filter((task, i) => i !== indexToDelete));

    }

    return (
        <div className='container'>
            <h1 className='heading'>Add your task here</h1>
            <div className='input-group'>
                <input className=''
                    type="text"
                    placeholder='Enter your task here..'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button onClick={addTask}>Add Task</button>

                <ul>
                    <span> {error && <p style={{ color: 'red' }}>{error}</p>}</span>
                    {
                        tasks.map((task, i) =>
                            <li key={i}>
                                {editIndex === i ? (
                                    <>
                                        <span>{i + 1}</span>
                                        <input className='inputtxt'
                                            ref={editInputRef}
                                            value={editText}
                                            onChange={(e) => setEditText(e.target.value)}
                                        />

                                        <button onClick={saveTask}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <span className=''>{i + 1}{"."}</span>
                                            <span className='txt'>{task}</span>
                                        </div>
                                        <div>

                                        </div>

                                        <div className='btn'>
                                            <button onClick={() => editTask(i)}>Edit</button>
                                            <button className='btn' onClick={() => deleteTask(i)}>Delete</button>
                                        </div>

                                    </>
                                )}
                            </li>
                        )
                    }
                </ul>

            </div>

        </div>
    )
}

export default TodoList