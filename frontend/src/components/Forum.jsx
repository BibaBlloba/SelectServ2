import LoginContainer from "./LoginContainer";
import { Modal } from "antd";
import React, { useContext, useEffect, useState } from 'react'
import { Input, Form, Button } from 'antd'
import { UserContext } from '../context/UserContext';
const { TextArea } = Input;

const Forum = () => {

  const [page, setPage] = useState(1)
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [token, setToken] = useContext(UserContext);
  const [loginModal, setLoginModal] = useState(false);
  const [mail, setMail] = useState(localStorage.getItem("UserEmail"));

  const sendMessage = async (values) => {
    if (token) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: 1,
          user_email: mail,
          message: values.message,
        })
      }

      await fetch("http://localhost:8000/forum/create_message", requestOptions)
      window.location.reload()
    } else {
      setLoginModal(true);
    }

  }

  const getMessages = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    }
    const response = await fetch(`http://localhost:8000/forum/get_all?page=${page}`, requestOptions)
    const resp = await response.json()
    setData(resp)
    setLoaded(true)
    console.log(resp)
  }

  const handleCancel = () => {
    setLoginModal(false);
  };

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <div className='min-h-screen bg-white flex flex-col p-[10px] gap-10 overflow-hidden'>
      <div className='border-black border-2 h-[210px] flex flex-col p-[10px] px-[20px]'>
        <Form onFinish={sendMessage}>
          <p>Оставте сообщение</p>
          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: "Пожалуйста, оставте сообщение",
              },
            ]}
          >
            <TextArea rows={4} style={{
              resize: 'none',
            }} />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" danger>Отправить</Button>
          </Form.Item>
        </Form>
      </div>
      <div className='flex flex-col-reverse gap-5'>
        {data && data.map((message) => (
          <div key={message.id} className='border-2 border-black min-h-28 flex flex-row'>
            <div className='flex justify-center items-center border-2 border-black aspect-square m-2 h-[128px] w-[128px]'>{message.user_email}</div>
            <div className="flex flex-col text-wrap">
              <p>{message.user_email}</p>
              <p>{message.message}</p>
            </div>
          </div>
        ))}
      </div>
      <Modal open={loginModal} onCancel={handleCancel}>
        <LoginContainer />
      </Modal>
    </div>
  )
}

export default Forum
