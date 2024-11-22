import { Drawer } from "@mui/material";
import { Button } from "antd";
import { useState } from "react";
import { navLinks } from "../constants";

function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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
        </div>
      </Drawer>
    </>
  );
}

export default MobileDrawer;
