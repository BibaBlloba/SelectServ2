import Admin_LeftBar from "./Admin_LeftBar";
import Admin_userTable from "./Admin_userTable";

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-row">
      <Admin_LeftBar />
      <Admin_userTable />
    </div>
  );
};

export default Admin;
