/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default () => {
    const [tasks, setTasks] = useState({});
    const fetchTasks = async () => {
        const res = await axios.get('http://localhost:4000/posts',{
        userId: "123"
    });
    setTasks(res.data);
    };
    useEffect(() => {
        fetchTasks();
    }, []);
    const renderedTasks = Object.values(tasks).map(task => {
        return <div className="card" 
        style={{ width: '30%', marginBottom: '20px' }}
        key={task.id}>
            <div className='card-body'>
                <h3>{task.title}</h3>
            </div>
        </div>;
    })
    
    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedTasks}</div>;
};