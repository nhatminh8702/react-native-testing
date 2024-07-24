import { Dispatch, SetStateAction } from "react";

export type todo = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

export type todoContext = {
  todoList: todo[];
  setTodoList: Dispatch<SetStateAction<todo[]>>;
  newId: number;
  setNewId: Dispatch<SetStateAction<number>>;
};
