import LoginContainer from "./LoginContainer";
import { Modal } from "antd";
import React, { useContext, useEffect, useState } from 'react'
import { Input, Form } from 'antd'
import Button_dark from './Button_dark'
import { UserContext } from '../context/UserContext';
const { TextArea } = Input;

const Forum = () => {

  const [page, setPage] = useState(1)
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [token, setToken, isSuper] = useContext(UserContext);
  const [loginModal, setLoginModal] = useState(false);
  const [mail, setMail] = useState(localStorage.getItem("UserEmail"));

  const handleDelete = async (values) => {
    const requestOptions = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    }
    const response = await fetch(`/api/forum/delete/${values}`, requestOptions)
    window.location.reload()
  }

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

      await fetch("/api/forum/create_message", requestOptions)
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
    const response = await fetch(`/api/forum/get_all?page=${page}`, requestOptions)
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
    <div className='min-h-screen flex flex-col p-[10px] gap-10 overflow-hidden bg-[#171E29]'>
      {token ? (
        <div className='bg-[#1F2B3B] border-[#31435D] border-[1px] rounded-md h-[210px] flex flex-col p-[10px] px-[20px]'>
          <Form onFinish={sendMessage}>
            <p className="text-white mb-[5px]">Оставте сообщение</p>
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
                backgroundColor: '#171E29',
                color: 'white',
              }} />
            </Form.Item>
            <Form.Item>
              <Button_dark text={"Отправить"} />
            </Form.Item>
          </Form>
        </div>
      ) : <div className='bg-[#1F2B3B] border-[#31435D] border-[1px] rounded-md h-[100px] flex justify-center items-center p-[10px] px-[20px]'>
        <Button_dark text={"Зарегестрироваться"} className="w-[200px]" onClick={() => setLoginModal(true)} />
      </div>}
      <div className='flex flex-col-reverse gap-5'>
        {data && data.map((message) => (
          <div key={message.id} className='border-[1px] border-[#31435D]  bg-[#1F2B3B] rounded-md  min-h-28 flex flex-row text-white'>
            <div className="flex flex-col items-center mb-[15px]">
              <div className='flex justify-center items-center border-[1px] bg-[#171E29] border-[#31435D] rounded-md aspect-square m-2 h-[128px] w-[128px]'>{message.user_email}</div>
              <p>{message.user_email}</p>
              {isSuper &&
                <button className="mt-3 w-[100px] h-[35px] transition-colors delay-100 hover:border-red-600 hover:text-red-600  active:bg-red-900 border-solid border-[1px] rounded-md"
                  name={message.id}
                  onClick={() => handleDelete(`${message.id}`)}
                >
                  Удалить
                </button>
              }
            </div>
            <div className="flex flex-col text-wrap p-[10px] gap-4">
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
