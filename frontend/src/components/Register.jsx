import { Button, Checkbox, Divider, Form, Input } from "antd";
import { useState } from "react";
import { FaGoogle, FaSteam, FaYandex } from "react-icons/fa";




const Register = () => {

  const [status, setStatus] = useState(0)

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

    const response = await fetch("http://127.0.0.1:8000/register", requestOptions)
    const data = await response.json();
    setStatus(response.status)

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
        <Input />
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
        <Input />
      </Form.Item>

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
