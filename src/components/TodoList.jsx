import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import { toggleTodo } from "../actions";
import PropTypes from "prop-types";

const mapStateToProps = state => {
  return { todos: state.todos };
};

const mapDispatchToProps = {
  toggleTodo: toggleTodo
};

const ConnectedTodoList = props => (
  <div className="list-group list-group-flush">
    {props.todos.map((item, index) => (
      <div className="list-group-item" key={index}>
        <Todo
          onTodoCheck={() => props.toggleTodo(item.id)}
          completed={item.completed}
          todoDescription={item.description}
        />
        {console.log(item)}
      </div>
    ))}
  </div>
);

const TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedTodoList);

ConnectedTodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
