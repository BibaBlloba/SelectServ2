import { NavBar, Master, Price, MasterRegister, Profile, ProfileGeneral, ProfileNotifications, ProfileMoney, ProfileInfo, Console } from "./components";
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Page404 from "./components/Page404";
import Test from "./components/Test";

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
      <div className="bg-gradient-to-r to-black from-[#701E1E] font-mainFont">
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
          <Route path="tst" element={<Test />} />
          <Route path="profile" element={<Profile />}>
            {/* <Route path="nav1" element={<ProfileGeneral />} /> */}
            {/* <Route path="nav2" element={<ProfileMoney />} /> */}
            {/* <Route path="nav3" element={<ProfileNotifications />} /> */}
            {/* <Route path="nav4" element={<ProfileInfo />} /> */}
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;
