import { Button, Modal } from "antd";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import LoginContainer from "./LoginContainer";

const ButtonConsole = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [token] = useState(localStorage.getItem("UserToken"));
  const handleChange = () => {
    if (token != "null") {
      window.location.href = "/console";
    } else {
      setLoginModal(true);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        className="sm:flex hidden"
        danger
        type="primary"
        onClick={handleChange}
      >
        В панель управления
      </Button>
      <Modal open={loginModal} onCancel={() => setLoginModal(false)}>
        <LoginContainer />
      </Modal>
    </>
  );
};
export default ButtonConsole;
