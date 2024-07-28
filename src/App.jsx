import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./features/counter/counterSlice";
import { useState } from "react";
import AnimatedNumber from "react-animated-numbers";

function App() {
  const count = useSelector((state) => state.counter.value);
  const [incrementAmount, setIncrementAmount] = useState();
  const dispatch = useDispatch();

  return (
    <div className="relative grid h-screen grid-rows-1 grid-cols-2">
      <button
        onClick={() => dispatch(increment())}
        className="flex text-9xl text-white justify-center items-center bg-gradient-to-r from-blue-500  to-cyan-400 active:brightness-105"
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="flex text-9xl text-white justify-center items-center bg-gradient-to-l from-red-500  to-orange-400 active:brightness-105"
      >
        -
      </button>

      <div className="absolute flex justify-center items-center font-bold font-mono text-5xl rounded-3xl bg-white/90 backdrop-blur-xl p-4 w-1/3 justify-self-center mt-40 select-none">
        {count < 0 && "-"}
        <AnimatedNumber
          transitions={() => ({
            type: "spring",
            duration: 0.4,
          })}
          animateToNumber={count}
        />
      </div>
    </div>
  );
}

export default App;
