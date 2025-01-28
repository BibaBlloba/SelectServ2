import React, { useState } from 'react'
import { Input, Form, Button } from 'antd'
const { TextArea } = Input;

const Forum = () => {
  // const [message, setMessage] = useState("")

  const sendMessage = (values) => {
    console.log(values)
  }

  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <div className='border-black border-2 h-[210px] m-[10px] flex flex-col p-[10px] px-[20px]'>
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
    </div>
  )
}

export default Forum
