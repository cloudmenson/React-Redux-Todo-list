import "./List.css";
import { useDispatch, useSelector } from "react-redux";
import { onDeleteTodo, onUpdateTodo } from "../../store/actions/todo";

export default function List() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="App__todo-list">
      {todos.map((todos) => {
        return (
          <div
            className={
              todos.completed
                ? "App__todo-list--item done"
                : "App__todo-list--item"
            }
            key={todos.id}
            onClick={() => dispatch(onUpdateTodo(todos.id))}
          >
            {todos.title}
            <button
              className="App__todo-list-remove-btn waves-effect waves-light btn red"
              onClick={() => dispatch(onDeleteTodo(todos.id))}
            >
              <i class="material-icons">remove</i>
            </button>
          </div>
        );
      })}
    </div>
  );
}
