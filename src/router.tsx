import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import Weather from "./components/Weather";
import Activity from "./components/Activity";
import Header from "./components/Header";

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
