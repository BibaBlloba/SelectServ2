import { navLinks } from "../constants";
import { Button } from "antd";
import MobileDrawer from "./MobileDrawer";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { redirect } from "react-router-dom";

function NavBar() {

  const [token, setToken] = useContext(UserContext)
  const [mail, setMail] = useState(localStorage.getItem("UserEmail"))

  const handleLogout = () => {
    setToken(null);
    setMail(null);
    localStorage.setItem("UserToken", token);
    localStorage.setItem("UserEmail", mail);
    setTimeout(() => { window.location.href = '/home'; }, 1000);
  }

  return (
    <nav className="z-20 w-full flex py-4 justify-between items-center sm:px-10  px-6 sticky top-0 text-white bg-gradient-to-r to-black from-[#701E1E] font-mainFont">
      <a href="/"><h1 className="text-xl sm:text-2xl  font-medium">Select Serv</h1></a>
      <ul className="list-none min-[840px]:flex hidden justify-start items-center flex-1 ml-9">
        {navLinks.map((nav) => (
          <li key={nav.id} className={`ml-5`}>
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center flex-1 space-x-5">
        {token && (
          <a>{mail}</a>
        )}
        {!token && (
          <a href="/profile">
            <Button variant="outlined" className="sm:flex hidden" danger>
              Логин
            </Button>
          </a>
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
    </nav>
  );
}

export default NavBar;
