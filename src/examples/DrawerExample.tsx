import { Button, Classes, Drawer } from "@blueprintjs/core";
import { useState, useCallback } from "react";

export function DrawerExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <div>
      <Button onClick={handleOpen}>Show Drawer</Button>
      <Drawer isOpen={isOpen} onClose={handleClose} title="Example Drawer">
        <div className={Classes.DRAWER_BODY}>
          <div className={Classes.DIALOG_BODY}>
            <p>
              This is an example of a drawer component. You can place any
              content here, such as forms, lists, or other components.
            </p>
            <p>
              Drawers are useful for displaying additional information or
              controls without navigating away from the current view.
            </p>
          </div>
        </div>
        <div className={Classes.DRAWER_FOOTER}>Footer</div>
      </Drawer>
    </div>
  );
}
