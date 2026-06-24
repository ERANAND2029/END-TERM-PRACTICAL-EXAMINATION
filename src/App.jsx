import { useState } from "react";

function App() {
  const [p, setP] = useState("");
  const [r, setR] = useState("");
  const [t, setT] = useState("");
  const [si, setSi] = useState(0);

  const calculateSI = () => {
    setSi((p * r * t) / 100);
  };

  return (
    <div>
      <h3>7. Simple Interest</h3>

      <input
        type="number"
        placeholder="Principal"
        onChange={(e) => setP(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Rate"
        onChange={(e) => setR(e.target.value)}
      />
      <br /><br />

      <input
        type="number"
        placeholder="Time"
        onChange={(e) => setT(e.target.value)}
      />
      <br /><br />

      <button onClick={calculateSI}>Calculate</button>

      <h4>SI = {si}</h4>
    </div>
  );
}

export default App;npm 