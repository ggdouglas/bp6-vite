import { Button, Dialog, DialogBody, DialogFooter } from "@blueprintjs/core";
import { useState, useCallback } from "react";

export function DialogExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => setIsOpen((value) => !value), []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      <Button onClick={handleClick} text="Show Dialog" />
      <Dialog isOpen={isOpen} onClose={handleClose} title="Dialog">
        <DialogBody>
          <p>This is a simple dialog example using Blueprint.js.</p>
        </DialogBody>
        <DialogFooter
          actions={
            <Button intent="danger" onClick={handleClose} text="Close" />
          }
        />
      </Dialog>
    </div>
  );
}
