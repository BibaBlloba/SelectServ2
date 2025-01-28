import { Drawer } from "@mui/material";
import { Button } from "antd";
import { useContext, useState } from "react";
import { navLinks } from "../constants";
import Button_dark from "./Button_dark";
import { UserContext } from "../context/UserContext";

function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [token, setToken, isSuper] = useContext(UserContext);
  const [mail, setMail] = useState(localStorage.getItem("UserEmail"));

  const handleLogout = () => {
    setToken(null);
    setMail(null);
    localStorage.setItem("UserToken", null);
    localStorage.setItem("UserEmail", null);
    setTimeout(() => {
      window.location.reload()
    }, 50);
  };

  return (
    <>
      <Button
        variant="contained"
        danger
        type="primary"
        onClick={() => setIsDrawerOpen(true)}
        className="block sm:hidden"
      >
        Меню
      </Button>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <div className="bg-slate-800 text-white min-h-screen flex flex-col  content-start p-5">
          {navLinks.map((nav, index) => (
            <div key={nav.id} className="py-2">
              <a href={`${nav.id}`}>{nav.title}</a>
            </div>
          ))}
          <Button_dark text={"Выход"} onClick={handleLogout} />
        </div>
      </Drawer>
    </>
  );
}

export default MobileDrawer;
