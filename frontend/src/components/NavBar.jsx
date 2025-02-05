import { Modal } from "antd";
import { navLinks } from "../constants";
import { Button } from "antd";
import MobileDrawer from "./MobileDrawer";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import LoginContainer from "./LoginContainer";
import { Tooltip } from "antd";
import ButtonConsole from "./ButtonConsole.jsx";
import { IoHomeSharp } from "react-icons/io5";

function NavBar({ stateChanger }) {
  const [loginModal, setLoginModal] = useState(false);
  const [token, setToken, isSuper, user_id, email] = useContext(UserContext);

  const handleLogout = () => {
    setToken(null);
    localStorage.setItem("UserToken", token);
    localStorage.setItem("UserEmail", email);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const handleLogin = () => {
    setLoginModal(true);
  };

  const handleCancel = () => {
    setLoginModal(false);
  };

  return (
    <nav className="z-20 w-full flex py-4 justify-between items-center sm:px-10  px-6 sticky top-0 text-white bg-gradient-to-r to-black from-[#701E1E] font-mainFont">
      <span className="absolute top-[-100000px]" id="Chad"></span>
      {isSuper && (
        <a href="/admin">
          <h1 className="text-blue-600 text-xl mr-8 hidden sm:block">Админ</h1>
        </a>
      )}
      <div className="sm:hidden block">
        {token ? (
          <a href="/">
            <IoHomeSharp className="text-2xl text-gray-200" />
          </a>
        ) : (
          <a href="/" className="">
            <h1 className="text-xl sm:text-2xl font-medium">Select Serv</h1>
          </a>
        )}
      </div>
      <a href="/" className="hidden sm:block">
        <h1 className="text-xl sm:text-2xl  font-medium">Select Serv</h1>
      </a>
      <ul className="list-none min-[840px]:flex hidden justify-start items-center flex-1 ml-9">
        {navLinks.map((nav) => (
          <li key={nav.id} className={`ml-5`}>
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center flex-1 space-x-5">
        {email != "null" && <a href="/profile">{email}</a>}
        <Tooltip
          // FIX: WTH with this path?
          title={
            window.location.href == "http://localhost:5173/"
              ? ""
              : "Работает только на главном экране"
          }
        >
          <a href="#Chad">
            <Button
              variant="outlined"
              className="sm:flex hidden"
              danger
              onClick={() => stateChanger("state")}
            >
              Гигачад
            </Button>
          </a>
        </Tooltip>
        {!token && (
          <Button
            variant="outlined"
            className="sm:flex hidden"
            danger
            onClick={handleLogin}
          >
            Логин
          </Button>
        )}
        <ButtonConsole />
        <MobileDrawer />
        {token && (
          <Button
            variant="outlined"
            className="sm:flex hidden"
            danger
            onClick={handleLogout}
          >
            Выход
          </Button>
        )}
      </div>

      <Modal open={loginModal} onCancel={handleCancel}>
        <LoginContainer />
      </Modal>
    </nav>
  );
}

export default NavBar;
