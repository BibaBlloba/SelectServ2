// import { useState } from "react";
import { NavBar, Master, Price, MasterRegister } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Master />,
  },
  {
    path: "/home",
    element: (
      <>
        <Master />
      </>
    ),
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/auth",
    element: <MasterRegister />,
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
