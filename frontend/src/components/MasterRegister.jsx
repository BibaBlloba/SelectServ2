import { Anchor, Button, Checkbox, Divider, Form, Input } from "antd";
import { useRef, useState, useEffect } from "react";
import { FaGoogle, FaSteam, FaYandex } from "react-icons/fa";
import Register from "./Register";
import { Outlet } from "react-router-dom";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.[0-9])(?=.*[!@#$%^&*]).{8.36}$/;




const MasterRegister = () => {
  const [loing, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = (values) => {
    console.log("Success:", values.email);
    setLogin(values.email);
    setPassword(values.password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const items = [
    {
      key: "/masterRegister",
      // label: "Основные",
      // icon: <IoPerson size={20} />
    },
    {
      key: "/masterLogin",
      // label: "Платежная информация",
      // icon: <FaMoneyBill size={20} />
    },
  ]


  return (
    <div className="bg-white p-5 hidden sm:block">
      <div className="max-h-[700px] bg-[url(./assets/MasterRegister.jpg)] bg-cover bg-right rounded-2xl flex flex-row p-12 justify-between">
        <div className="flex flex-col justify-between ">
          <h1 className="text-white text-5xl max-w-[200px]">
            Начните пользоваться продуктами сейчас
          </h1>
          <div className="text-white">
            <p>Остались вопросы?</p>
            <p>Свяжитесь с техподдержкой</p>
            <p>support@selectel.ru</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border-[5px] border-solid border-gray-300 p-8 w-[430px] h-[610px] flex flex-col gap-4">
          <Anchor
            direction="horizontal"
            items={[
              {
                key: 'Register',
                href: '/MasterRegister',
                title: 'Регистрация',
              },
              {
                key: 'Login',
                href: '/MasterLogin',
                title: 'Логин',
              },
            ]}
          />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MasterRegister;
