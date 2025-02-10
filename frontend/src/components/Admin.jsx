import { useContext, useEffect } from "react";
import SidebarPro from "./admin/SidebarPro"
import Admin_userTable from "./Admin_userTable";
import { UserContext } from "../context/UserContext";

const Admin = () => {
  const [token, setToken, isSuper, user_id, email] = useContext(UserContext);

  useEffect(() => {
    if (token == "null") {
      console.log("Token is null :3")
      window.location.href = "/home"
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-800 flex flex-row">
      <SidebarPro />
      <Admin_userTable />
    </div>
  );
};

export default Admin;
