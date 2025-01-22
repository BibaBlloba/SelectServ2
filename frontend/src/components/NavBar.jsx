import { Modal } from "antd";
import { navLinks } from "../constants";
import { Button } from "antd";
import MobileDrawer from "./MobileDrawer";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import LoginContainer from "./LoginContainer";
import { Tooltip } from 'antd';

function NavBar({ stateChanger }) {
  const [token, setToken] = useContext(UserContext);
  const [mail, setMail] = useState(localStorage.getItem("UserEmail"));
  const [loginModal, setLoginModal] = useState(false);


  const handleLogout = () => {
    setToken(null);
    setMail(null);
    localStorage.setItem("UserToken", token);
    localStorage.setItem("UserEmail", mail);
    window.location.href = "/home";
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
      <a href="/">
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
        {token && <a>{mail}</a>}
        <Tooltip title={window.location.href == "http://localhost:5173/" ? '' : 'Работает только на главном экране'}>
          <a href="#Chad">
            <Button
              variant="outlined"
              className="sm:flex hidden"
              danger
              onClick={() => stateChanger('state')}
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
        <a href="/profile">
          <Button
            variant="contained"
            className="sm:flex hidden"
            danger
            type="primary"
          >
            В панель управления
          </Button>
        </a>
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
