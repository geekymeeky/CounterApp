import React from "react";
import { useState } from "react";
import { ReactComponent as Up } from "./up.svg";
import { ReactComponent as Down } from "./down.svg";

const App = () => {
  const [Count, setCount] = useState(0);
  return (
    <div className="app">
      <h1>Counter</h1>
      <div className="counter">
        <p className="count">{Count}</p>
      </div>
      <div className="wrapper">
        <Up className="btn" onClick={(e) => setCount(Count + 1)} />
        <button className="btn__reset" onClick={(e) => setCount(0)}>
          Reset
        </button>
        <Down className="btn" onClick={(e) => setCount(Count - 1)} />
      </div>
    </div>
  );
};

export default App;
