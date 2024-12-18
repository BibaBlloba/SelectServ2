import { Button, Divider, Form, Input } from 'antd'
import React from 'react'
import { FaGoogle, FaSteam, FaYandex } from 'react-icons/fa'

const Login = () => {
  return (
    <Form layout="vertical"
      initialValues={{
        remember: true,
      }}
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
        name="passwd"
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
