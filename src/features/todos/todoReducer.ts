import { state as initialState } from "./todoState";

export const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_COMPLETE":
      return state.map((todo) => {
        if (todo.id !== action.payload) return todo;

        return { ...todo, isCompleted: !todo.isCompleted };
      });
    default:
      return state;
  }
};
