import { useReducer } from "react";
import { doReset, doIncreaseBy } from './Actions/Actions';
import { CounterState } from "./Interfaces/Interfaces";
import { reducer } from "./State/Reducer";
// import * as Actions from './Actions/Actions'; // se llaman Actions.doIncreaseBy()


const INITIAL_STATE:CounterState={
  counter: 0,
  previus: 0,
  change : 0
};

export const CounterReducer = () => {


    const [counterState, dispatch] = useReducer(reducer, INITIAL_STATE);

    const handleReset=()=>{
      dispatch(doReset())
    }

    const handleIncreseBy=(num:number)=>{
      dispatch(doIncreaseBy(num))
    }

  return (
  <>
    <br/>
    Reducer: {JSON.stringify(counterState,null,2)}
    <br/>
    <button className="btn btn-outline-primary" onClick={()=>handleIncreseBy(1)}>+1</button>
    <button className="btn btn-outline-primary" onClick={()=>handleIncreseBy(5)}>+5</button>
    <button className="btn btn-outline-primary" onClick={()=>handleIncreseBy(10)}>+10</button>

    <button className="btn btn-outline-primary" onClick={handleReset}>Reset</button>

  </>);
};
