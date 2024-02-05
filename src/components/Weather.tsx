import { getWeatherData } from "@/services/weather.service";
import { useEffect, useState } from "react";

type ForecastResponseKeys =
  | "apparent_temperature"
  | "cloud_cover"
  | "interval"
  | "is_day"
  | "precipitation"
  | "pressure_msl"
  | "rain"
  | "relative_humidity_2m"
  | "showers"
  | "snowfall"
  | "surface_pressure"
  | "temperature_2m"
  | "time"
  | "weather_code"
  | "wind_direction_10m"
  | "wind_gusts_10m"
  | "wind_speed_10m";

interface ForecastResponse {
  data: Record<ForecastResponseKeys, number>;
  units: Record<ForecastResponseKeys, string>;
}

function Weather() {
  const [weatherData, setWeatherData] = useState<ForecastResponse>();
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    setIsLoading(true);
    const data = await getWeatherData();
    setWeatherData({
      data: data.current,
      units: data.current_units,
    });
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="mb-5 text-3xl font-bold">Weather</h1>
      <div className="flex flex-col gap-3">
        {isLoading
          ? "Loading..."
          : weatherData &&
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
      </div>
    </>
  );
}

export default Weather;
