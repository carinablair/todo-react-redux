import React from "react";
import TodoList from "./TodoList.jsx";
import TodoInput from "./TodoInput.jsx";
import Typography from "@material-ui/core/Typography";

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <Typography variant="h4">Todos</Typography>
      <TodoList />
    </div>
    <div className="col-md-4 offset-md-1">
      <Typography variant="h4">Add a todo</Typography>
      <TodoInput />
    </div>
  </div>
);

export default App;
