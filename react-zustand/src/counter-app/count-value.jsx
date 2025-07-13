import { useCounter } from "../store/useCounter";

const CountValue = () => {
  const count = useCounter((state) => state.count);
  return (
    <div>
      <h2>Count Value: {count}</h2>
    </div>
  );
};

export default CountValue;
