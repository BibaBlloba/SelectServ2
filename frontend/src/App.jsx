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
    <div className="bg-gradient-to-r to-black from-[#701E1E]">
      <NavBar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
