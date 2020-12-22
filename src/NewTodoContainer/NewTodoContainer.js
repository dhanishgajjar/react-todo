import { Form } from './Form';
import { Items } from './Items';
import { useTodoList } from '../useTodoList';

export const NewTodoContainer = () => {
  const [{ todos }, { addTodo, removeTodo }] = useTodoList([
    { text: "Book Tickets to Mars", isCompleted: false }
  ]);

  return (
    <div className="wrapper">
      <Form onAddTodo={addTodo} />
      <Items todos={todos} onRemoveTodo={removeTodo} />
    </div>
  )
}
