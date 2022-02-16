import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {gsap} from "gsap";

export const useCounter = (maxCount:number=1) =>{


    const [counter, setcounter] = useState(5);

    const elementToAnime = useRef<any>(null);

    const timeline = useRef(gsap.timeline());

    const handleClick=()=>{
        setcounter(Math.min(counter+1,maxCount))
    }


    useLayoutEffect(() => {
    //  console.log('%cSe llego al valor máximo', 'color:red; background-color:black;');

    //  const timeline=gsap.timeline(); //Lo ref arriba
     timeline.current.to(elementToAnime.current,{y:-10, duration: 0.5, ease: 'ease.out'})
                     .to(elementToAnime.current,{y:0, duration: 1, ease: 'bounce.out'})
                     .pause();

    }, [counter<10]);
    


    return {
        elementToAnime,
        counter,
        handleClick
    }
}