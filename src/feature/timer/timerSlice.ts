import { RootState } from "@/app/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TimerState {
  defaultValue: number;
  value: number;
  isStarted: boolean;
}

const initialState: TimerState = {
  defaultValue: 120,
  value: 120,
  isStarted: false,
};

const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setTimer: (state, action: PayloadAction<number>) => {
      state.defaultValue = action.payload;
    },
    decrement: (state) => {
      if (state.isStarted) {
        state.value -= 1;
        if (state.value <= 0) {
          state.value = 0;
          state.isStarted = false;
        }
      }
    },
    resetTimer: (state) => {
      state.value = state.defaultValue;
    },
    startTimer: (state) => {
      state.isStarted = true;
    },
    stopTimer: (state) => {
      state.isStarted = false;
    },
  },
});

export const { setTimer, decrement, resetTimer, startTimer, stopTimer } =
  timerSlice.actions;

export const selectTimerValue = (state: RootState) => state.timer.value;
export const selectTimerIsStarted = (state: RootState) => state.timer.isStarted;

export default timerSlice.reducer;
