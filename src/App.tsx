import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="text-center selection:bg-green-900">
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
