// import { useState } from "react";
import { NavBar, Master, Price, MasterRegister, Profile, ProfileNav1, ProfileNav2, ProfileNav3, ProfileNav4 } from "./components";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

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
  {
    path: "/profile",
    element: <Profile />,
  },
]);

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-r to-black from-[#701E1E]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Master />} />
          <Route path="home" element={<Master />} />
          <Route path="price" element={<Price />} />
          <Route path="auth" element={<MasterRegister />} />
          <Route path="profile" element={<Profile />}>
            <Route path="nav1" element={<ProfileNav1 />} />
            <Route path="nav2" element={<ProfileNav2 />} />
            <Route path="nav3" element={<ProfileNav3 />} />
            <Route path="nav4" element={<ProfileNav4 />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
