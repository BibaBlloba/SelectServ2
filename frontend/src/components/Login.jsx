import { Button, Divider, Form, Input } from 'antd'
import axios from 'axios'
import { FaGoogle, FaSteam, FaYandex } from 'react-icons/fa'

const onFinish = async (values) => {
  console.log('Success: ', values);

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: JSON.stringify(`grant_type=password&username=${values.email}&password=${values.password}&scope=&client_id=string&client_secret=string`)
  }

  const response = await fetch("http://localhost:8000/login", requestOptions)
  const data = await response.json()

  if (!response.ok) {
    console.log(data.detail)
  } else {
    localStorage.setItem("UserToken", data.access_token)
  }
}

const onFailed = (errorInfo) => {
  console.log('Failed: ', errorInfo);
}

const API_URL = "http://localhost:8000";

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config
})

const Login = () => {
  return (
    <Form layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFailed}
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
    </Form >
  )
}

export default Login
