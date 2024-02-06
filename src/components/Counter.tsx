import {
  decrement,
  increment,
  reset,
  selectCounterValue,
} from "@/feature/counter/counterSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

function Counter() {
  const count = useAppSelector(selectCounterValue);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="mt-3">
        <h1 className="text-xl">Count is {count}</h1>
        <button
          type="button"
          className="mx-2 my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          type="button"
          className="mx-2 my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          type="button"
          className="mx-2 my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default Counter;
