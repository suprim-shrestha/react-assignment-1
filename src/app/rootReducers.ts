import { combineReducers } from "redux";
import timerReducer from "../feature/timer/timerSlice";

const rootReducer = combineReducers({
  timer: timerReducer,
});

export default rootReducer;
