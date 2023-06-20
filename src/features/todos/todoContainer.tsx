import { useSelector } from "react-redux";
import { RootState } from "../../common/rootState.type";
import { TodoPresenter } from "./todoPresenter";
import { useDispatch } from "react-redux";
import { addTodoAction } from "./todoAction";
import { Todo } from "../../common/todo.type";

export const TodoContainer = () => {
  const todos = useSelector((state: RootState) => state);
  const maxID = todos.length ? todos.slice(-1)[0].id : 0;
  const dispatch = useDispatch();

  const addTodo = (title: string, content: string) => {
    const newTodo: Todo = {
      id: maxID + 1,
      title: title,
      content: content,
      isCompleted: false,
    };
    dispatch(addTodoAction(newTodo));
  };

  const args = {
    todos,
    addTodo,
  };
  return <TodoPresenter {...args} />;
};
