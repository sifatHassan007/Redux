import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './action'
function App() {
  const dispatch=useDispatch();
  const counter =useSelector(state=>state.Counter)
  return (
    <div className="App">
      <h1>Count: {counter}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
