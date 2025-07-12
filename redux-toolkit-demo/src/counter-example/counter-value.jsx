import { useSelector } from "react-redux";

const CounterValue = () => {
  const value = useSelector((state) => state);

  return (
    <div>
      <h2>Counter Value is {value.counter.value}</h2>
    </div>
  );
};

export default CounterValue;
