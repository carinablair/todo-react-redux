import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import TodoFilters from "./TodoFilters";
import { toggleTodo, filterTodo } from "../actions";
import PropTypes from "prop-types";
import { getFilteredTodos } from "../selectors/selectors";

const mapStateToProps = state => {
  const currentFilter = state.todoFilters.currentFilter;
  return {
    todos: getFilteredTodos(state, currentFilter),
    currentFilter: currentFilter
  };
};

const mapDispatchToProps = {
  toggleTodo: toggleTodo,
  filterTodo: filterTodo
};

const ConnectedTodoList = props => (
  <div>
    <div className="list-group list-group-flush">
      {props.todos.map((item, index) => (
        <div className="list-group-item" key={index}>
          <Todo
            onTodoCheck={() => props.toggleTodo(item.id)}
            completed={item.completed}
            todoDescription={item.description}
          />
        </div>
      ))}
    </div>
    <TodoFilters
      onFilterChange={filter => props.filterTodo(filter)}
      currentFilter={props.currentFilter}
    />
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
