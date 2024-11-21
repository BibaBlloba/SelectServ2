import { navLinks } from "../constants";
// import Button from "@mui/material/Button";
import { Button } from "antd";
// import Button from "@mui/material/Button";

function NavBar() {
  return (
    <nav className="w-full flex py-4 justify-between items-center px-10 fixed text-white bg-gradient-to-r to-black from-[#701E1E]">
      <h1 className="text-2xl font-medium">Select Serv</h1>
      <ul className="list-none min-[840px]:flex hidden justify-start items-center flex-1 ml-9">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`ml-5`}>
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-end items-center flex-1 space-x-5">
        <a href="#auth">
          <Button variant="outlined" className="flex" danger>
            Логин
          </Button>
        </a>
        <a href="#console">
          <Button variant="contained" className="flex" danger type="primary">
            В панель управления
          </Button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
