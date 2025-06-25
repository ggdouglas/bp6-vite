import { DateInput } from "@blueprintjs/datetime";
import { useState } from "react";

export function DateInputExample() {
  const [value, setValue] = useState<string | null>(null);

  return <DateInput onChange={setValue} value={value} />;
}
