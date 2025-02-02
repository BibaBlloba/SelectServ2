import { Button, Checkbox, Divider, Form, Input } from "antd";
import { useState } from "react";
import { FaGoogle, FaSteam, FaYandex } from "react-icons/fa";
import ErrorMessage from './ErrorMessage';

const Register = () => {

  const [status, setStatus] = useState(0)
  const [errorMessage, setErrorMessage] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [pwdVisible, setPwdVisible] = useState(false)
  const URL_LOGIN = "http://localhost:8000/login"

  const Login = async (values) => {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(`grant_type=password&username=${values.email}&password=${values.password}&scope=&client_id=string&client_secret=string`)
    }

    const response = await fetch(URL_LOGIN, requestOptions)
    const data = await response.json()

    if (!response.ok) {
      setErrorMessage("Неверный логин или пароль")
    } else {
      console.log(data)
      localStorage.setItem("UserToken", data.access_token)
    }
    setTimeout(() => {
      window.location.reload()
    }, 500);
  }

  const onFinish = async (values) => {

    console.log("Success:", values);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      })
    }

    const response = await fetch("http://localhost:8000/register", requestOptions)
    await fetch("/api", requestOptions)
    const data = await response.json();
    if (data.detail == "REGISTER_USER_ALREADY_EXISTS") {
      setErrorMessage("Данный пользователь уже зарегистрирован")
      setSuccessMessage("")
    } else {
      setErrorMessage("")
      setSuccessMessage("Пользователь зарегестрирован")
    }
    setStatus(response.status)
    Login(values)

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Электронная почта"
        name="email"
        rules={[
          {
            required: true,
            message: "Пожайлуста, введите почту",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Пожайлуста, введите пароль",
          },
        ]}
      >
        <Input.Password
          visibilityToggle={{
            visible: pwdVisible,
            onVisibleChange: setPwdVisible,
          }}
        />
      </Form.Item>
      <Form.Item
        label="Повторите пароль"
        name="passwdRepeat"
        rules={[
          {
            required: true,
            message: "Пожайлуста, повторите пароль",
          },
        ]}
      >
        <Input.Password
          visibilityToggle={{
            visible: pwdVisible,
            onVisibleChange: setPwdVisible,
          }}
        />
      </Form.Item>
      <ErrorMessage message={errorMessage} />
      <ErrorMessage message={successMessage} success />
      <Form.Item name="newsCheck" valuePropName="newsCheck" label={null}>
        <Checkbox>Я хочу получать новостную рассылку</Checkbox>
      </Form.Item>
      <Form.Item
        name="licenseCheck"
        valuePropName="licenseCheck"
        label={null}
        rules={[
          {
            required: false,
            message: "Обязательно для регистрации",
          },
        ]}
      >
        <Checkbox>Соглашение на обработку персональных данных</Checkbox>
      </Form.Item>

      <Form.Item label={null}>
        <Button
          variant="contained"
          danger
          type="primary"
          htmlType="submit"
        >
          Подтвердить
        </Button>
      </Form.Item>
      <Divider >or Login with</Divider>
      <div className="flex flex-row justify-start gap-5">
        <Button><FaGoogle style={{ fontSize: 18 }} /></Button>
        <Button><FaSteam style={{ fontSize: 18 }} /></Button>
        <Button><FaYandex style={{ fontSize: 18 }} /></Button>
      </div>
    </Form>
  )
}

export default Register
