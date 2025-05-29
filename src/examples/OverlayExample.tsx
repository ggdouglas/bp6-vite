import { Button, Overlay } from "@blueprintjs/core";
import { useState, useCallback } from "react";

export function OverlayExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => setIsOpen((value) => !value), []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      <Button onClick={handleClick} text="Show Overlay" />
      <Overlay isOpen={isOpen}>
        <p>Content</p>
        <Button intent="danger" onClick={handleClose}>
          Close
        </Button>
      </Overlay>
    </div>
  );
}
