import {
  Button,
  Menu,
  MenuDivider,
  MenuItem,
  Popover,
} from "@blueprintjs/core";

export function PopoverExample() {
  return (
    <Popover content={<Content />} position="bottom">
      <Button intent="primary" tabIndex={0}>
        Popover target
      </Button>
    </Popover>
  );
}

const Content = () => (
  <Menu>
    <MenuDivider title="Edit" />
    <MenuItem icon="cut" text="Cut" label="⌘X" />
    <MenuItem icon="duplicate" text="Copy" label="⌘C" />
    <MenuItem icon="clipboard" text="Paste" label="⌘V" disabled={true} />
    <MenuDivider title="Text" />
    <MenuItem icon="align-left" text="Alignment">
      <MenuItem icon="align-left" text="Left" />
      <MenuItem icon="align-center" text="Center" />
      <MenuItem icon="align-right" text="Right" />
      <MenuItem icon="align-justify" text="Justify" />
    </MenuItem>
    <MenuItem icon="style" text="Style">
      <MenuItem icon="bold" text="Bold" />
      <MenuItem icon="italic" text="Italic" />
      <MenuItem icon="underline" text="Underline" />
    </MenuItem>
  </Menu>
);
