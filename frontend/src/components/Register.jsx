import { Button, Checkbox, Divider, Form, Input } from "antd";
import { useRef, useState, useEffect } from "react";
import { FaGoogle, FaSteam, FaYandex } from "react-icons/fa";
import React from 'react'

const Register = () => {
  const [loing, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = (values) => {
    console.log("Success:", values.email);
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
