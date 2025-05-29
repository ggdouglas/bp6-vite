import { OverlayExample } from "./examples/OverlayExample";
import { Overlay2Example } from "./examples/Overlay2Example";
import { DialogExample } from "./examples/DialogExample";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="examples">
        <OverlayExample />
        <Overlay2Example />
        <DialogExample />
      </div>
    </div>
  );
}

export default App;
