import React from "react";
import { Button } from "@blueprintjs/core";
import "./App.css";

function App() {
  // log react version in console
  console.log("React version:", React.version);

  return (
    <div className="app">
      <Button>Hello world</Button>
    </div>
  );
}

export default App;
