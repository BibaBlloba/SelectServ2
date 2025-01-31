import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle } from "@mui/material";
import Button from '@mui/material/Button';

const Admin_userTable = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(null);
  const [token, setToken, isSuper, user_id, email] = useContext(UserContext);
  const [openAdminAdd, setOpenAdminAdd] = useState(false);
  const [openAdminRm, setOpenAdminRm] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [workUserId, setWorkUserId] = useState(null)
  const [workUserEmail, setWorkUserEmail] = useState(null)

  const handleClickOpenDelete = (id, email) => {
    setWorkUserId(id)
    setWorkUserEmail(email)
    setOpenDelete(true);
  };

  const handleClickOpenAdminAdd = (id, email) => {
    setWorkUserId(id)
    setWorkUserEmail(email)
    setOpenAdminAdd(true);
  };

  const handleClickOpenAdminRm = (id, email) => {
    setWorkUserId(id)
    setWorkUserEmail(email)
    setOpenAdminRm(true);
  };


  const handleClose = () => {
    setOpenDelete(false);
    setOpenAdminAdd(false);
    setOpenAdminRm(false);
  };

  const getUsers = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };
    const response = await fetch(`/api/users/all?page=${page}`, requestOptions);
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
    await fetch(`/api/users/${values}`, requestOptions)
    handleClose()
    getUsers()
  }

  const addAdminToUser = async (values) => {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        is_superuser: true,
      })
    }
    await fetch(`/api/users/${values}`, requestOptions)
    handleClose()
    getUsers()
  }

  const rmAdminToUser = async (values) => {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        is_superuser: false,
      })
    }
    await fetch(`/api/users/${values}`, requestOptions)
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
              <th className="flex flex-row gap-4 justify-between">
                {user.is_superuser == true ? (
                  <Button color="primary" onClick={() => handleClickOpenAdminRm(user.id, user.email)}>Забрать админку</Button>
                ) : <Button color="primary" onClick={() => handleClickOpenAdminAdd(user.id, user.email)}>Дать админку</Button>}
                <Button variant="outlined" color="error" onClick={() => handleClickOpenDelete(user.id, user.email)} >
                  DELETE
                </Button>
              </th>
            </tr>
          ))}
      </table>

      <Dialog
        open={openDelete}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Удалить пользователя ${workUserId}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Удалить пользователя {workUserEmail}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => deleteUser(workUserId)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openAdminAdd}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Дать админку пользователю ${workUserId}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Дать админку пользователю {workUserEmail}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => addAdminToUser(workUserId)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openAdminRm}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Забрать админку у ${workUserId}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">Забрать админку у {workUserEmail}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={() => rmAdminToUser(workUserId)} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Admin_userTable;
