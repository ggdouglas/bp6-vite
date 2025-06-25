import { ContextMenu, Menu, MenuItem } from "@blueprintjs/core";

export function ContextMenuExample() {
  return (
    <ContextMenu
      content={
        <Menu>
          <MenuItem text="Save" />
          <MenuItem text="Save as..." />
          <MenuItem text="Delete..." intent="danger" />
        </Menu>
      }
    >
      Right click me!
    </ContextMenu>
  );
}
