import { Button, Modal } from "antd";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import LoginContainer from "./LoginContainer";

const ButtonConsole = () => {
  const [loginModal, setLoginModal] = useState(false);

  const handleChange = () => {
    if (localStorage.getItem("UserToken")) {
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
