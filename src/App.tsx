import Activity from "./components/Activity";

function App() {
  return (
    <div className="text-center selection:bg-green-900">
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white">
        <Activity />
      </div>
    </div>
  );
}

export default App;
