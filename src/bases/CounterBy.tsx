import { useState } from "react";

interface Props{
    initialValue?:number;

}

export const CounterBy = ({initialValue=10}: Props) => {

    const [counterState, setCounterState] = useState({
      counter:initialValue,
      clicks:0,
    });

    const {counter, clicks}= counterState;

    const handleClick=(initialValue:number)=>{
        setCounterState(prev=>({
          counter: prev.counter+initialValue,
          clicks: prev.clicks+1
        }))
    }

  return (
  <>
    <h1>CounterBy: {counter}</h1>
    <h1>Clicks: {clicks}</h1>
    <br/>
    <button className="btn btn-outline-primary" onClick={()=>handleClick(1)}>+1</button>
    <button className="btn btn-outline-primary" onClick={()=>handleClick(5)}>+5</button>

  </>);
};
