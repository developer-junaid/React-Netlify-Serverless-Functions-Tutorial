import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // Message
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("/.netlify/functions/hello?name=from Junaid's Serverless function")
      .then((res) => res.json())
      .then((obj) => setValue(obj));
  }, []);

  return (
    <div className="App">
      <h1>Hello function</h1>
      <p>Function Data: {value.message}</p>
    </div>
  );
}

export default App;
