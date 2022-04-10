import "./Form.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/actions/todo";

export default function Form() {
  const [setTitle, setNewTitle] = useState({ title: "" });
  const dispatch = useDispatch();
  function onChangeHandler(e) {
    setNewTitle({ title: e.target.value });
  }
  function onAddTodos(e) {
    e.preventDefault();
    dispatch(addTodo(setTitle));
    setNewTitle({ title: "" });
  }
  return (
    <div className="App__todo-list-form">
      <form className="col" onSubmit={onAddTodos}>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              value={setTitle.title}
              placeholder="What do you need to do?"
              onChange={onChangeHandler}
            />
            <button
              className="App__todo-list-form-btn btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
