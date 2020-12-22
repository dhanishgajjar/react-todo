import { useReducer } from 'react';

const defaultState = {
  todos: [],
  visibility: true
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addTodo': {
      const { text } = action.payload;
      const newTodos = [...state.todos, { text }];
      return {
        ...state,
        todos: newTodos,
        visibility: true
      }
    }
    case 'removeTodo': {
      const { index } = action.payload;
      const newTodos = [...state.todos];
      newTodos.splice(index, 1);
      return {
        ...state,
        todos: newTodos
      }
    }
    case 'hideList': {
      return {
        ...state,
        visibility: false
      }
    }
    default:
      return state;
  }
}

const addTodoCreator = text => ({ type: 'addTodo', payload: { text } });
const removeTodoCreator = index => ({ type: 'removeTodo', payload: { index } });
const hideListCreator = () => ({ type: 'hideList' });

export const useTodoList = (todos = []) => {
  const [state, dispatch] = useReducer(reducer, { ...defaultState, todos });
  const addTodo = (...args) => dispatch(addTodoCreator(...args));
  const removeTodo = (...args) => dispatch(removeTodoCreator(...args));
  const hideList = (...args) => dispatch(hideListCreator(...args));
  return [
    state,
    {
      addTodo,
      removeTodo,
      hideList
    }
  ]
}