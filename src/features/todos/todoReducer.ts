import { state as initialState } from "./todoState";

export const todosReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
