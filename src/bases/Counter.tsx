import { useState } from "react";

interface Props{
    initialValue?:number;

}

export const Counter = ({initialValue=0}: Props) => {

    const [counter, setcounter] = useState(initialValue);

    const handleClick=()=>{
        setcounter(counter+1)
    }

  return (
  <>
    <br/>
    Counter: {counter}
    <br/>
    <button className="btn btn-outline-primary" onClick={handleClick}>+1</button>
  </>);
};
