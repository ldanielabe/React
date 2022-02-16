import { useCounter } from './Hooks/useCounter';


export const CounterHook = () => {

  const { elementToAnime,counter,handleClick}=useCounter(10)
 
  return (
  <>
    <br/>
    <h1>Counter Hook: </h1>
    <h2 ref={elementToAnime}>{counter}</h2>
    <br/>
    <button className="btn btn-outline-primary" onClick={handleClick}>+1</button>
  </>);
};
