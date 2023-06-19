import { useSelector } from "react-redux";
import { RootState } from "../../common/rootState.type";
import { TodoPresenter } from "./todoPresenter";

export const TodoContainer = () => {
  const todos = useSelector((state: RootState) => state);

  const args = {
    todos,
  };
  return <TodoPresenter {...args} />;
};
