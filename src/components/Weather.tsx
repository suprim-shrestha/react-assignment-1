import { useLoaderData } from "react-router-dom";

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
  current: Record<ForecastResponseKeys, number>;
  current_units: Record<ForecastResponseKeys, string>;
}

function Weather() {
  const weatherData = useLoaderData() as ForecastResponse;

  return (
    <>
      <h1 className="mb-5 text-3xl font-bold">Weather</h1>
      <div className="flex flex-col gap-3">
        {weatherData &&
          Object.keys(weatherData.current).map((key) => {
            const dataKey = key as ForecastResponseKeys;
            if (dataKey !== "time" && dataKey !== "interval") {
              return (
                <div key={key}>
                  {key
                    .replace(/_/g, " ")
                    .replace(/\b\w/g, (char) => char.toUpperCase())}
                  : {weatherData.current[dataKey]}
                  {weatherData.current_units[dataKey]}
                </div>
              );
            }
          })}
      </div>
    </>
  );
}

export default Weather;
