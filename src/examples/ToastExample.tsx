import { Button, OverlayToaster } from "@blueprintjs/core";
import { useCallback } from "react";

const toaster = OverlayToaster.create();

export function ToastExample() {
  const handleClick = useCallback(async () => {
    (await toaster).show({
      message: "This is a toast message!",
      intent: "success",
    });
  }, []);

  return (
    <Button intent="primary" onClick={handleClick}>
      Show Toast
    </Button>
  );
}
