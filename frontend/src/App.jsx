// import { useState } from "react";
import { NavBar, Master } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
  },
  {
    path: "/home",
    element: <Master />,
  },
]);

function App() {
  return (
    <div>
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
