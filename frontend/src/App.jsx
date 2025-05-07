import {
  NavBar,
  Master,
  Price,
  MasterRegister,
  Profile,
  Footer,
  Forum,
  Admin,
  Console,
} from "./components";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import General from './components/console/General';
import Register from "./components/Register";
import Login from "./components/Login";
import Page404 from "./components/Page404";
import Test from "./components/Test";
import { useState } from "react";
import UnderConstruction from "./components/UnderConstruction";
import Rent from "./components/console/Rent";

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
  const [secret, setSecret] = useState(false);

  return (
    <BrowserRouter>
      {/* <div className=""> */}
      <div
        className={`${secret ? "bg-[url(./assets/giga.jpg)] bg-contain" : "bg-gradient-to-r to-black from-[#701E1E]"}`}
      >
        <NavBar
          stateChanger={() => {
            setSecret(!secret);
          }}
        />
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
          <Route path="forum" element={<Forum />} />
          <Route path="admin" element={<Admin />} />
          <Route path="console" element={<Console />}>
            <Route index element={<General />} />
            <Route path="general" element={<General />} />
            <Route path="rent" element={<Rent />} />
          </Route>
          <Route path="profile" element={<Profile />}>
            {/* <Route path="nav1" element={<ProfileGeneral />} /> */}
            {/* <Route path="nav2" element={<ProfileMoney />} /> */}
            {/* <Route path="nav3" element={<ProfileNotifications />} /> */}
            {/* <Route path="nav4" element={<ProfileInfo />} /> */}
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
