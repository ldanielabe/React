import { CounterAction } from "../Actions/Actions";
import { CounterState } from "../Interfaces/Interfaces";


export const reducer = (state: CounterState, action: CounterAction): CounterState =>{
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