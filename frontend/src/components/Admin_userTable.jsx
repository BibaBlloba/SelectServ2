import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle } from "@mui/material";
import Button from '@mui/material/Button';

const Admin_userTable = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [token, setToken, isSuper, user_id, email] = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [delUserId, setDelUserId] = useState(null)
  const [delUserEmail, setDelUserEmail] = useState(null)

  const handleClickOpen = (id, email) => {
    setDelUserId(id)
    setDelUserEmail(email)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getUsers = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch(
      `http://localhost:8000/users/all/?page=${page}`,
      requestOptions,
    );
    const resp = await response.json();
    setData(resp);
    // FIX: remove console.log
    console.log(resp);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const deleteUser = async (values) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    }
    await fetch(`http://localhost:8000/users/${values}`, requestOptions)
    handleClose()
    getUsers()
  }

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
              <th>
                <Button variant="outlined" color="error" onClick={() => handleClickOpen(user.id, user.email)} >
                  DELETE
                </Button>
              </th>
            </tr>
          ))}
      </table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Удалить пользователя ${delUserId}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Удалить пользователя {delUserEmail}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => deleteUser(delUserId)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Admin_userTable;
