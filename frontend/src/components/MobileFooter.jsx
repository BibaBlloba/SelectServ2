import { useState } from "react";
import { List, ListSubheader, listSubheaderClasses, ListItemText, ListItemButton } from "@mui/material";


const MobileFooter = () => {

  return (
    <div className="bg-slate-900 text-gray-400 p-5 sm:hidden flex flex-col justify-start">
      <List component="nav" subheader={<ListSubheader component="div">SubHeader</ListSubheader>}>
      </List>
    </div>
  );
};

export default MobileFooter;
