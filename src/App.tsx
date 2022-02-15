import { Counter } from "./bases/Counter";
import { CounterBy } from "./bases/CounterBy";

function App() {
  return (
    <>
    <Counter initialValue={15}/>
    <br/>
    <CounterBy/>
    </>
  );
}

export default App;
