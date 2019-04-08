import { ADD_TODO, TOGGLE_TODO } from "../constants/action-types";
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
        console.log(action);
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

const todoApp = combineReducers({
  todos
});

export default todoApp;
