import { useState } from 'react';

export const Form = ({ onAddTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    onAddTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="todoInput" placeholder="Add a task"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}