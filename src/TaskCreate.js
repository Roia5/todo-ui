/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import axios from 'axios';

export default () => {
    const [content, setContent] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4000/api/v1/tasks', {
            userId: "123",
            content
        });

        setContent('');
    };
    return (
      <div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>Content </label>
                <input value={content} 
                onChange={e => setContent(e.target.value)} 
                className="form-control" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
    );
};