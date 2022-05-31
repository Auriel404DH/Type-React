import React from 'react';
import { ToDoListProp } from '../interfaces';
import s from 'classnames';

const ToDoList: React.FC<ToDoListProp> = ({ RemoveHandler, ToggleHandler, todos }) => {
  if (!todos.length) {
    return <p className="center">Заданий нет :-)</p>;
  }

  const RemoveFunc = (event: React.MouseEvent, id: number) => {
    event.preventDefault();
    RemoveHandler(id);
  };

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className={s('todo', {
              completed: todo.completedB,
            })}
          >
            <label>
              <input
                onChange={ToggleHandler.bind(null, todo.id)}
                type="checkbox"
                checked={todo.completedB}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={(event) => RemoveFunc(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDoList;
