import Header from "./components/Header";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="text-center selection:bg-green-900">
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <Header />
        <Timer />
      </div>
    </div>
  );
}

export default App;
