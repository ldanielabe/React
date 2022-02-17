import { useReducer } from "react";

interface CounterState{
  counter: number,
  previus: number,
  change : number
}

const INITIAL_STATE:CounterState={
  counter: 0,
  previus: 0,
  change : 0
};

type CounterAction=
| {type:'increaseBy', payload: {value:number}}
| {type:'reset'}


const reducer = (state: CounterState, action: CounterAction): CounterState =>{
  switch (action.type) {
    case 'increaseBy':
      
      return {
        counter: state.counter+action.payload.value,
        previus: state.counter,
        change: state.change+1
      };
      
    case 'reset':
      
        return {
          counter: 0,
          previus: 0,
          change: 0
        };
    default:
      return state;
  }
}

export const CounterReducer = () => {


    const [counterState, dispatch] = useReducer(reducer, INITIAL_STATE);

    const handleReset=()=>{
      dispatch({type:'reset'})
    }

    const handleIncreseBy=(num:number)=>{
      dispatch({type:'increaseBy', payload: {value:num}})
    }

  return (
  <>
    <br/>
    Counter Reducer: {JSON.stringify(counterState,null,2)}
    <br/>
    <button className="btn btn-outline-primary" onClick={()=>handleIncreseBy(1)}>+1</button>
    <button className="btn btn-outline-primary" onClick={()=>handleIncreseBy(5)}>+5</button>
    <button className="btn btn-outline-primary" onClick={()=>handleIncreseBy(10)}>+10</button>

    <button className="btn btn-outline-primary" onClick={handleReset}>Reset</button>

  </>);
};
