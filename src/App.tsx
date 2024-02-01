import Weather from "./components/Weather";

function App() {
  return (
    <div className="text-center selection:bg-green-900">
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <Weather />
      </div>
    </div>
  );
}

export default App;
