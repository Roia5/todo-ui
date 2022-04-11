/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const headers = { 'Content-Type': 'application/json' };

export default () => {
    const [tasks, setTasks] = useState({});
    
    const fetchTasks = async () => {
        const res = await axios.get('tasks-service:8080/api/v1/123/tasks/', 
        { headers } 
      );
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
                <h4>{task.content}</h4>
            </div>
        </div>;
    })
    
    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedTasks}</div>;
};