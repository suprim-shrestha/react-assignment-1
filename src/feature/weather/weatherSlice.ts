import { RootState } from "@/app/store";
import { getWeatherData } from "@/services/weather.service";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { ForecastResponse } from "./weather.interface";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchData",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getWeatherData();
      const weatherData: ForecastResponse = {
        data: data.current,
        units: data.current_units,
      };
      return weatherData;
    } catch (error) {
      if (error instanceof AxiosError) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue("Error");
      }
    }
  },
);

interface WeatherState {
  data: ForecastResponse | null;
  status: "pending" | "fulfilled" | "rejected";
  errorMessage: string;
}

const initialState: WeatherState = {
  data: null,
  status: "pending",
  errorMessage: "",
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(
      fetchWeatherData.fulfilled,
      (state, action: PayloadAction<ForecastResponse>) => {
        state.status = "fulfilled";
        state.data = action.payload;
      },
    );
    builder.addCase(
      fetchWeatherData.rejected,
      (state, action: PayloadAction<unknown>) => {
        state.status = "rejected";
        state.errorMessage = action.payload as string;
      },
    );
  },
});

export const selectWeatherData = (state: RootState) => state.weather.data;
export const selectWeatherStatus = (state: RootState) => state.weather.status;
export const selectWeatherError = (state: RootState) =>
  state.weather.errorMessage;

export default weatherSlice.reducer;
