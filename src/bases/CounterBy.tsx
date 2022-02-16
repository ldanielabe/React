import { useState } from "react";

interface Props{
    initialValue?:number;

}

interface CounterState{
  counter: number;
  click: number;
}

export const CounterBy = ({initialValue=10}: Props) => {

    const [ {counter, click}, setCounterState] = useState<CounterState>({
      counter:initialValue,
      click:0,
    });

    const handleClick=(initialValue:number)=>{
        setCounterState(({counter, click})=>({
          counter: counter+initialValue,
          click: click+1
        }))
    }

  return (
  <>
    <h1>CounterBy: {counter}</h1>
    <h1>Clicks: {click}</h1>
    <br/>
    <button className="btn btn-outline-primary" onClick={()=>handleClick(1)}>+1</button>
    <button className="btn btn-outline-primary" onClick={()=>handleClick(5)}>+5</button>

  </>);
};
