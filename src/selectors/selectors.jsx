import { TODO_FILTERS } from "../constants/action-types";

export const getFilteredTodos = (store, todoFilters) => {
  const allTodos = store.todos;
  switch (todoFilters) {
    case TODO_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed);
    case TODO_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed);
    case TODO_FILTERS.ALL:
    default:
      return allTodos;
  }
};
