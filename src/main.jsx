import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ViewCreator from "./pages/ViewCreator";
import "./index.css";
// import '@picocss/pico'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowCreators/>,
  },
  {
    path: "/add",
    element: <AddCreator/>,
  },
  {
    path: "/edit/:id",
    element: <EditCreator/>,
  },
  {
    path: "/view/:id",
    element: <ViewCreator/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

  