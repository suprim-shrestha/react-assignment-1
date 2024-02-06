import { combineReducers } from "redux";
import timerReducer from "@/feature/timer/timerSlice";
import counterReducer from "@/feature/counter/counterSlice";
import weatherReducer from "@/feature/weather/weatherSlice";

const rootReducer = combineReducers({
  timer: timerReducer,
  counter: counterReducer,
  weather: weatherReducer,
});

export default rootReducer;
