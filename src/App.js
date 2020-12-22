import './App.css';
import { TodoContainer } from './TodoContainer';
import { NewTodoContainer } from './NewTodoContainer';

function App() {
  return (
    <div className="App">
      <NewTodoContainer />
      <TodoContainer />
    </div>
  );
}

export default App;