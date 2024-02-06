import { ForecastResponseKeys } from "@/feature/weather/weather.interface";
import {
  fetchWeatherData,
  selectWeatherData,
  selectWeatherError,
  selectWeatherStatus,
} from "@/feature/weather/weatherSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useEffect } from "react";

function Weather() {
  const weatherData = useAppSelector(selectWeatherData);
  const isLoading = useAppSelector(selectWeatherStatus);
  const errorMessage = useAppSelector(selectWeatherError);

  const dispatch = useAppDispatch();

  function displayData() {
    if (isLoading === "pending") {
      return <>Loading...</>;
    } else if (isLoading === "rejected") {
      return <>{errorMessage}</>;
    } else {
      return (
        <>
          {weatherData &&
            Object.keys(weatherData.data).map((key) => {
              const dataKey = key as ForecastResponseKeys;
              if (dataKey !== "time" && dataKey !== "interval") {
                return (
                  <div key={key}>
                    {key
                      .replace(/_/g, " ")
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                    : {weatherData.data[dataKey]}
                    {weatherData.units[dataKey]}
                  </div>
                );
              }
            })}
        </>
      );
    }
  }

  useEffect(() => {
    async function getData() {
      dispatch(fetchWeatherData());
    }

    getData();
  }, [dispatch]);

  return (
    <>
      <h1 className="mb-5 text-3xl font-bold">Weather</h1>
      <div className="flex flex-col gap-3">{displayData()}</div>
    </>
  );
}

export default Weather;
