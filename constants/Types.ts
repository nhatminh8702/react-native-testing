import { Dispatch, SetStateAction } from "react";

export type Todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export type TodoContextType = {
  todoList: Todo[];
  setTodoList: Dispatch<SetStateAction<Todo[]>>;
  newId: number;
  setNewId: Dispatch<SetStateAction<number>>;
};
