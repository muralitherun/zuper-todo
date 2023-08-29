import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ToDoList.css';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/todos')
      .then(response => {
        setTodos(response.data.todos);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='container'>
      <h1>Todo List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Todo</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.todo}</td>
              <td>
                <input
                  type="checkbox"
                  checked={todo.completed}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;