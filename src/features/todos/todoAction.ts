import { Todo } from "../../common/todo.type";

export const addTodoAction = (newTodo: Todo) => {
  return {
    type: "ADD",
    payload: newTodo,
  };
};

export const toggleComleteAction = (id: number) => {
  return {
    type: "TOGGLE_COMPLETE",
    payload: id,
  };
};

export const removeTodoAction = (id: number) => {
  return {
    type: "REMOVE",
    payload: id,
  };
};
