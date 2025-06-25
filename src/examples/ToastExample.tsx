import { Button, OverlayToaster } from "@blueprintjs/core";
import { useCallback } from "react";

const toaster = await OverlayToaster.create();

export function ToastExample() {
  const handleClick = useCallback(() => {
    toaster.show({ message: "This is a toast message!", intent: "success" });
  }, []);

  return (
    <Button intent="primary" onClick={handleClick}>
      Show Toast
    </Button>
  );
}
