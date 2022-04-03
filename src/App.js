/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import TaskCreate from './TaskCreate';
import TaskList from './TaskList';

export default () => {
    return (
    <div className="container">
      <h1>Create Task</h1>
      <TaskCreate />
      <hr />
      <h1>Tasks</h1>
      <TaskList />
    </div>
    );
};