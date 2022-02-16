import { useEffect, useState } from "react";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setcounter] = useState(5);

    const handleClick=()=>{
        setcounter(Math.min(counter+1,MAXIMUN_COUNT))
    }

    useEffect(() => {
     if(counter<10) return;
     console.log('%cSe llego al valor máximo', 'color:red; background-color:black;');
    }, [counter]);
    

  return (
  <>
    <br/>
    Counter Effect: {counter}
    <br/>
    <button className="btn btn-outline-primary" onClick={handleClick}>+1</button>
  </>);
};
