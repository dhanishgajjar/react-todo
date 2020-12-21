import { Form } from './Form';
import { Items } from './Items';
import { useState } from 'react';

export const TodoContainer = () => {
  const [todos, setTodos] = useState([
    { text: "Book Tickets to London", isCompleted: false },
    { text: "Clear Trash", isCompleted: false },
    { text: "Buy M1 MacMini", isCompleted: false },
    { text: "Meet Clarkio for BUD", isCompleted: false }
  ]);

  const [visibility, setVisibility] = useState(true);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    if (!visibility) setVisibility(true);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="wrapper">
      <Form onAddTodo={addTodo} />
      {visibility && <Items todos={todos} onRemoveTodo={removeTodo} />}
      <button className="hideButton" onClick={() => setVisibility(!visibility)}>{visibility ? 'Hide Tasks' : 'Show Tasks'}
      </button>
    </div>
  )
}
