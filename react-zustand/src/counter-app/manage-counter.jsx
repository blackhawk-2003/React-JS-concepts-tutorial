import { useCounter } from "../store/useCounter";

const ManageCounter = () => {
  const increment = useCounter((state) => state.increment);
  const decrement = useCounter((state) => state.decrement);
  const reset = useCounter((state) => state.reset);
  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ManageCounter;
