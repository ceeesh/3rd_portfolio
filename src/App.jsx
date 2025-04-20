import { useState } from "react";

import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-screen h-screen bg-mainBg flex flex-col items-center justify-center">
      <Home />
    </div>
  );
}

export default App;
