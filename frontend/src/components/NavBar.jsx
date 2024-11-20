import { navLinks } from "../constants";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <nav className="w-full flex py-6 justify-between items-center px-10">
      <h1 className="text-xl font-medium">Select Serv</h1>
      <ul className="list-none sm:flex hidden justify-start items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`ml-5`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <a href="#console">
        <Button variant="contained" className="flex">
          В панель управления
        </Button>
      </a>
    </nav>
  );
}

export default NavBar;
