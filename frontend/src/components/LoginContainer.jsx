import React from 'react'
import Login from './Login';
import Register from './Register';
import { Tabs } from 'antd';

const LoginContainer = ({ border }) => {

  const items = [
    {
      key: '1',
      label: 'Регистраиця',
      children: <Register />,
    },
    {
      key: '2',
      label: 'Вход',
      children: <Login />,
    }
  ];

  return (
    <div className={`bg-white rounded-xl ${border && "border-[5px] "} border-solid border-gray-300 p-8 pt-4 w-[430px] h-[630px] flex flex-col gap-4`}>
      <Tabs defaultActiveKey="1" items={items} animated={true} />
    </div>
  )
}

export default LoginContainer
