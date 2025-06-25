import { Code, Divider, H1, H5 } from "@blueprintjs/core";
import React from "react";
import { createBrowserRouter, NavLink, RouterProvider } from "react-router";
import { ContextMenuExample } from "./examples/ContextMenuExample";
import { DateInputExample } from "./examples/DateInputExample";
import { DialogExample } from "./examples/DialogExample";
import { DrawerExample } from "./examples/DrawerExample";
import { MultiSelectExample } from "./examples/MultiSelectExample";
import { Overlay2Example } from "./examples/Overlay2Example";
import { OverlayExample } from "./examples/OverlayExample";
import { PopoverExample } from "./examples/PopoverExample";
import { SelectExample } from "./examples/SelectExample";
import { ToastExample } from "./examples/ToastExample";
import { TooltipExample } from "./examples/TooltipExample";
import "./App.css";
import packageJson from "../package.json";

const coreVersion = packageJson.dependencies["@blueprintjs/core"];

interface Example {
  path: string;
  element: React.ReactNode;
  name: string;
}

const examples: Example[] = [
  {
    path: "context-menu",
    element: <ContextMenuExample />,
    name: "ContextMenu",
  },
  { path: "/date-input", element: <DateInputExample />, name: "DateInput" },
  { path: "/dialog", element: <DialogExample />, name: "Dialog" },
  { path: "/drawer", element: <DrawerExample />, name: "Drawer" },
  {
    path: "/multi-select",
    element: <MultiSelectExample />,
    name: "MultiSelect",
  },
  { path: "/overlay", element: <OverlayExample />, name: "Overlay" },
  { path: "/overlay2", element: <Overlay2Example />, name: "Overlay2" },
  { path: "/popover", element: <PopoverExample />, name: "Popover" },
  { path: "/select", element: <SelectExample />, name: "Select" },
  { path: "/toast", element: <ToastExample />, name: "Toast" },
  { path: "/tooltip", element: <TooltipExample />, name: "Tooltip" },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  ...examples,
]);

function App() {
  return (
    <div className="app">
      <H1>Blueprint Examples</H1>
      <Divider />
      <H5>
        React version: <Code>{React.version}</Code>
      </H5>
      <H5>
        Blueprint version: <Code>{coreVersion}</Code>
      </H5>
      <div className="examples">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

function Home() {
  return (
    <nav>
      <ul>
        {examples.map((example) => (
          <li key={example.path}>
            <NavLink to={example.path}>{example.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default App;
