import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Admin_userTable = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [token, setToken, isSuper, user_id, email] = useContext(UserContext);

  const getMessages = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch(
      `http://localhost:8000/users?page=${page}`,
      requestOptions,
    );
    const resp = await response.json();
    setData(resp);
    // FIX: remove console.log
    console.log(resp);
  };

  return (
    <div className="w-screen flex justify-center items-center">
      <table>
        <tr>
          <th>User Id</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        {data && <tr>data.</tr>}
      </table>
    </div>
  );
};

export default Admin_userTable;
