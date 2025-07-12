import { useDispatch } from "react-redux";
import { increment } from "../store/slices/counter";
const CounterButton = () => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(increment())}>Increase Counter</button>
  );
};

export default CounterButton;
