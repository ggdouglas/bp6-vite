import { Button, Classes, Overlay2 } from "@blueprintjs/core";
import clsx from "clsx";
import { useState, useCallback } from "react";

export function Overlay2Example() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => setIsOpen((value) => !value), []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  const classes = clsx(Classes.CARD, Classes.ELEVATION_4, "overlay-example");

  return (
    <div>
      <Button onClick={handleClick} text="Show Overlay2" />
      <Overlay2
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        className={Classes.OVERLAY_SCROLL_CONTAINER}
        hasBackdrop={true}
        isOpen={isOpen}
        onClose={handleClose}
      >
        <div className={classes}>
          <p>Content</p>
          <Button intent="danger" onClick={handleClose}>
            Close
          </Button>
        </div>
      </Overlay2>
    </div>
  );
}
