import { Classes, Tooltip } from "@blueprintjs/core";

export function TooltipExample() {
  return (
    <Tooltip
      className={Classes.TOOLTIP_INDICATOR}
      content={"This is a tooltip."}
    >
      This is a tooltip example.
    </Tooltip>
  );
}
