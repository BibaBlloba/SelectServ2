import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Admin_userTable = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [token, setToken, isSuper, user_id, email] = useContext(UserContext);

  const getUsers = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch(`/api/users?page=${page}`, requestOptions);
    const resp = await response.json();
    setData(resp);
    // FIX: remove console.log
    console.log(resp);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="w-screen flex justify-center items-center">
      <table className="adminUsersTable text-white">
        <tr>
          <th>User Id</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
        {data &&
          data.map((user, id) => (
            <tr key={id}>
              <th>{user.id}</th>
              <th>{user.email}</th>
              <th>
                {user.phone_number == "string" || user.phone_number == null
                  ? "-"
                  : user.phone_number}
              </th>
              <th>
                {user.is_superuser == true ? (
                  <p className="text-blue-600">Admin</p>
                ) : (
                  "User"
                )}
              </th>
              <th>{user.id}</th>
            </tr>
          ))}
      </table>
    </div>
  );
};

export default Admin_userTable;
