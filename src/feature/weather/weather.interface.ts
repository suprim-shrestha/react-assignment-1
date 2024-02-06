export type ForecastResponseKeys =
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

export interface ForecastResponse {
  data: Record<ForecastResponseKeys, number>;
  units: Record<ForecastResponseKeys, string>;
}
