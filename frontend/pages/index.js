import { useEffect, useState } from "react";

export default function Home() {
  const [equities, setEquities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/equities")
      .then(res => res.json())
      .then(data => setEquities(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>ZIYAN Tokenized Equities</h1>

      {equities.map((eq, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <h3>{eq.name} ({eq.symbol})</h3>
          <p>Price: ${eq.price}</p>
          <button>Buy (Coming Soon)</button>
        </div>
      ))}
    </div>
  );
}
