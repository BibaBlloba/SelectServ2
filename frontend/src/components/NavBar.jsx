import { navLinks } from "../constants";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <nav className="w-full flex py-6 justify-between items-center px-10">
      <h1 className="text-xl font-medium">Select Serv</h1>
      <ul className="list-none min-[840px]:flex hidden justify-start items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`ml-5`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center flex-1 max-w-[300px]">
        <a href="#auth">
          <Button variant="outlined" className="flex">
            Логин
          </Button>
        </a>
        <a href="#console">
          <Button variant="contained" className="flex">
            В панель управления
          </Button>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
