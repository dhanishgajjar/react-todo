import { Form } from './Form';
import { Items } from './Items';
import { useTodoList } from '../useTodoList';

export const TodoContainer = () => {
  const [{ todos, visibility }, { addTodo, removeTodo, hideList }] = useTodoList([
    { text: "Book Tickets to London", isCompleted: false },
    { text: "Clear Trash", isCompleted: false },
    { text: "Buy M1 MacMini", isCompleted: false },
    { text: "Meet Clarkio for BUD", isCompleted: false }
  ]);

  return (
    <div className="wrapper">
      <Form onAddTodo={addTodo} />
      {visibility && <Items todos={todos} onRemoveTodo={removeTodo} />}
      <button className="hideButton" onClick={hideList}>{visibility ? 'Hide Tasks' : 'Show Tasks'}
      </button>
    </div>
  )
}
