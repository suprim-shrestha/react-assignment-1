import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Weather from "./components/Weather";
import Activity from "./components/Activity";
import Header from "./components/Header";
import { getWeatherData } from "./services/weather.service";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Header />,
      },
      {
        path: "weather",
        element: <Weather />,
        loader: async () => {
          return getWeatherData();
        },
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "timer",
        element: <Timer />,
      },
      {
        path: "activity",
        element: <Activity />,
      },
    ],
  },
  {
    path: "*",
    element: <>404 Page Not Found</>,
  },
]);
