import { navLinks } from "../constants";
// import Button from "@mui/material/Button";
import { Button } from "antd";
import MobileDrawer from "./MobileDrawer";
// import Button from "@mui/material/Button";

function NavBar() {
  return (
    <nav className="z-20 w-full flex py-4 justify-between items-center sm:px-10  px-6 fixed text-white bg-gradient-to-r to-black from-[#701E1E]">
      <a href="/"><h1 className="text-xl sm:text-2xl  font-medium">Select Serv</h1></a>
      <ul className="list-none min-[840px]:flex hidden justify-start items-center flex-1 ml-9">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`ml-5`}>
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center flex-1 space-x-5">
        <a href="/profile/nav1">
          <Button variant="outlined" className="sm:flex hidden" danger>
            Логин
          </Button>
        </a>
        <a href="/auth">
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
      </div>
    </nav>
  );
}

export default NavBar;
