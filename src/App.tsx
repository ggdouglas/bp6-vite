import { OverlayExample } from "./examples/OverlayExample";
import { Overlay2Example } from "./examples/Overlay2Example";
import { DialogExample } from "./examples/DialogExample";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
  { path: "/dialog", element: <DialogExample /> },
  { path: "/overlay", element: <OverlayExample /> },
  { path: "/overlay2", element: <Overlay2Example /> },
]);

function App() {
  return (
    <div className="app">
      <div className="examples">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
