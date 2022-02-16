import { useEffect, useRef, useState } from "react";
import {gsap} from "gsap";

const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setcounter] = useState(5);

    const counterElement = useRef<HTMLHeadingElement>(null);


    const handleClick=()=>{
        setcounter(Math.min(counter+1,MAXIMUN_COUNT))
    }


    useEffect(() => {
     if(counter<10) return;
     console.log('%cSe llego al valor máximo', 'color:red; background-color:black;');

     const timeline=gsap.timeline();
     timeline.to(counterElement.current,{y:-10, duration: 0.5, ease: 'ease.out'});
     timeline.to(counterElement.current,{y:0, duration: 1, ease: 'bounce.out'});

    //  gsap.to(counterElement.current,{y:-10, duration: 0.5, ease: 'ease.out'}).then(()=>{
    //   gsap.to(counterElement.current,{y:0, duration: 1, ease: 'bounce.out'})
    //  })
    }, [counter]);
    

  return (
  <>
    <br/>
    <h1>Counter Effect: </h1>
    <h2 ref={counterElement}>{counter}</h2>
    <br/>
    <button className="btn btn-outline-primary" onClick={handleClick}>+1</button>
  </>);
};
