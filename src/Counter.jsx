import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./data/counter";
const Counter = () => {
  const value = useSelector((storeData) => storeData.counterState.value);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{value}</h1>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(increment());
        }}
      >
        +
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(decrement());
        }}
      >
        -
      </button>
    </>
  );
};

export default Counter;
