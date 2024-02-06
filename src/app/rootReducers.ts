import { combineReducers } from "redux";
import timerReducer from "@/feature/timer/timerSlice";
import counterReducer from "@/feature/counter/counterSlice";

const rootReducer = combineReducers({
  timer: timerReducer,
  counter: counterReducer,
});

export default rootReducer;
