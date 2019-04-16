import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "@material-ui/core";

const Todo = ({ onTodoCheck, completed, todoDescription }) => (
  <div
    onClick={onTodoCheck}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    <Checkbox checked={completed} color="primary" /> {todoDescription}
  </div>
);

Todo.propTypes = {
  onTodoCheck: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  todoDescription: PropTypes.string.isRequired
};

export default Todo;
