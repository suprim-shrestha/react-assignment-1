import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="mt-3">
        <button
          type="button"
          className="my-6 rounded bg-gray-300 px-2 py-2 text-[#282C34] transition-all hover:bg-gray-200"
          onClick={() => setCount((count) => count + 1)}
        >
          count is: {count}
        </button>
      </p>
      <p>
        Edit <code className="text-[#8d96a7]">App.tsx</code> and save to test
        HMR updates.
      </p>
      <p className="mt-3 flex gap-3 text-center text-[#8d96a7]">
        <a
          className="text-[#61dafb] transition-all hover:text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {" | "}
        <a
          className="text-[#61dafb] transition-all hover:text-blue-400"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </p>
    </>
  );
}

export default Counter;
