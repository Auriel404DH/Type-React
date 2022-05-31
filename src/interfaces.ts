export interface ITodo {
  title: string;
  id: number;
  completedB: boolean;
}

export interface ToDoListProp {
  todos: Array<ITodo>;
  ToggleHandler(id: number): void;
  RemoveHandler(id: number): void;
}
