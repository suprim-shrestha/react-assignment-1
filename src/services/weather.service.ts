import axios from "axios";

export async function getWeatherData() {
  const response = await axios.get(
    "https://api.open-meteo.com/v1/forecast?latitude=27.673&longitude=85.43&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&format=json&timeformat=unixtime",
  );
  return response.data;
}
