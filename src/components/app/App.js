import "./App.css";
import Form from "../form/Form";
import List from "../list/List";

function App() {
  return (
    <div className="App__todo container">
      <h1>Todo-list</h1>
      <Form />
      <List />
    </div>
  );
}

export default App;
