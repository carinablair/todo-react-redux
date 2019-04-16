import {
  ADD_TODO,
  TOGGLE_TODO,
  FILTER_TODO,
  TODO_FILTERS
} from "../constants/action-types";
import { combineReducers } from "redux";

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.todo.id,
          description: action.todo.todoDescription,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

function todoFilters(state = { currentFilter: TODO_FILTERS.ALL }, action) {
  switch (action.type) {
    case FILTER_TODO: {
      return Object.assign({}, state, { currentFilter: action.payload });
    }
    default: {
      return state;
    }
  }
}

const todoApp = combineReducers({
  todos,
  todoFilters
});

export default todoApp;
