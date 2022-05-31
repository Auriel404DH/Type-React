import React from 'react';
import { ToDoForm, ToDoList } from '../components';
import { ITodo } from '../interfaces';

const ToDosPage: React.FC = () => {
  const [ToDos, setToDos] = React.useState<Array<ITodo>>([]);

  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('ToDos') || '[]') as ITodo[];
    setToDos(saved);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('ToDos', JSON.stringify(ToDos));
  }, [ToDos]);
  const addHandler = (title: string) => {
    const newToDo: ITodo = {
      title,
      id: Date.now(),
      completedB: false,
    };
    // setToDos([newToDo, ...ToDos]);
    setToDos((prev) => [newToDo, ...prev]);
  };

  const ToggleHandler = (id: number) => {
    setToDos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.completedB = !todo.completedB;
        }
        return todo;
      }),
    );
  };

  const RemoveHandler = (id: number) => {
    const shouldRemove = window.confirm('Вы уверены?');
    if (shouldRemove) {
      setToDos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };
  return (
    <React.Fragment>
      <ToDoForm onAdd={addHandler} />
      <ToDoList ToggleHandler={ToggleHandler} RemoveHandler={RemoveHandler} todos={ToDos} />
    </React.Fragment>
  );
};

export default ToDosPage;
