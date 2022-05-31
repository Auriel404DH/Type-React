import React, { useState } from 'react';
import './../app.css';

interface ToDoFormProps {
  onAdd(title: string): void;
}

export const ToDoForm: React.FC<ToDoFormProps> = ({ onAdd }) => {
  const [toDo, setToDo] = useState<string>('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToDo(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onAdd(toDo);
      setToDo('');
    }
  };

  return (
    <div className="input-field well">
      <input
        onKeyPress={keyPressHandler}
        onChange={changeHandler}
        value={toDo}
        type="text"
        id="title"
        placeholder="Пиши тут."
      />
      <label htmlFor="title" className="active">
        Чего делаем?
      </label>
    </div>
  );
};
