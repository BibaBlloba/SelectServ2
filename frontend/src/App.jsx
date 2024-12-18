// import { useState } from "react";
import { NavBar, Master, Price, MasterRegister, Profile, ProfileGeneral, ProfileNotifications, ProfileMoney, ProfileInfo, Console } from "./components";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

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
  {
    path: "/console",
    element: <Console />,
  },
]);

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-r to-black from-[#701E1E]">
        <NavBar />
        <Routes>
          <Route path="/" element={<Master />}>
            <Route path="/" element={<Register />} />
            <Route path="MasterRegister" element={<Register />} />
            <Route path="MasterLogin" element={<Login />} />
          </Route>
          <Route path="home" element={<Master />} />
          <Route path="price" element={<Price />} />
          <Route path="auth" element={<MasterRegister />} />
          <Route path="profile" element={<Profile />}>
            <Route path="nav1" element={<ProfileGeneral />} />
            <Route path="nav2" element={<ProfileMoney />} />
            <Route path="nav3" element={<ProfileNotifications />} />
            <Route path="nav4" element={<ProfileInfo />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
