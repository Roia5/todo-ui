/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import axios from 'axios';
const headers = { 'Content-Type': 'application/json' };

export default () => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('todo-tasks-service:80/api/v1/123/tasks/', {
            content
        }, { headers });

        setContent('');
    };
    return (
      <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>What needs to be done? </label>
                <input value={content} 
                onChange={e => setContent(e.target.value)} 
                className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
    );
};