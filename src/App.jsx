import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Messages from "./Messages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>
        Latest Messages :
      </h1>
      <Messages />
    </div>
  );
}

export default App;
