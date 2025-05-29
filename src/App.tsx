import { Button, Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => setIsOpen((value) => !value), []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <div className="app">
      <Button onClick={handleClick} text="Show dialog" />
      <Dialog isOpen={isOpen} onClose={handleClose} title="Dialog">
        <DialogBody>
          <p>This is a simple dialog example using Blueprint.js.</p>
        </DialogBody>
        <DialogFooter
          actions={
            <Button intent="primary" onClick={handleClose} text="Close" />
          }
        />
      </Dialog>
    </div>
  );
}

export default App;
