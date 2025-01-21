import { Button, Divider, Form, Input } from 'antd'
import axios from 'axios'
import { useState } from 'react';
import { FaGoogle, FaSteam, FaYandex } from 'react-icons/fa'
import ErrorMessage from './ErrorMessage';




const Login = () => {

  const [errorMessage, setErrorMessage] = useState("")
  const URL_LOGIN = "http://localhost:8000/login"
  const URL_ME = "http://localhost:8000/users/me"

  const Redir = () => {
    window.location.href = '/profile';
  }

  const onFinish = async (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: JSON.stringify(`grant_type=password&username=${values.email}&password=${values.password}&scope=&client_id=string&client_secret=string`)
    }

    const response = await fetch(URL_LOGIN, requestOptions)
    const data = await response.json()

    const requestOptionsForUser = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.access_token,
      }
    }

    if (!response.ok) {
      setErrorMessage("Неверный логин или пароль")
    } else {
      localStorage.setItem("UserToken", data.access_token)
    }

    const userResponse = await fetch(URL_ME, requestOptionsForUser)
    const userData = await userResponse.json()
    if (userResponse.ok) {
      localStorage.setItem("UserEmail", userData.email)
      window.location.reload()
      Redir()
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
      <ErrorMessage message={errorMessage} />
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
