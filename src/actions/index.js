import { ADD_TODO, TOGGLE_TODO, FILTER_TODO } from "../constants/action-types";

export function addTodo(todo) {
  return { type: ADD_TODO, todo: todo };
}

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id: id };
}

export function filterTodo(filter) {
  return { type: FILTER_TODO, payload: filter };
}
