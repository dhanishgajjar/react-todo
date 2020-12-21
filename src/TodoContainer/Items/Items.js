export const Items = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.text}
          <button
            className="deleteButton"
            onClick={() => onRemoveTodo(index)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  )
};