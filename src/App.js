
import './App.css';
import Addtodolist from './component/Addtodolist'
import Todolist from './component/Todolist'
import {useState} from 'react'
import {useSelector} from 'react-redux'
function App() {
  const [todos, setTodos] = useState([
    { text: "save the galaxy", id: 1, isDone: false },
    { text: "walk the cat ", id: 2, isDone: false },
    { text: "attend the workshop ", id: 3, isDone: false },
  ]);
  const data = useSelector((state) => state.todos)
  if(data.length < todos.length) {
    setTodos(data)
  }
  return (
    <div className="App">
      <h1>to do app</h1>
       <Addtodolist />
       <Todolist todos={todos} />
    </div>
  );
}

export default App;
