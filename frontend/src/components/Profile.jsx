import React from 'react'
import { Tabs } from 'antd'
import Profile_Main from './Profile_Main';
import Profile_Security from './Profile_Security';

const Profile = () => {

  const items = [
    {
      key: '1',
      label: <p className='text-white'>Профиль</p>,
      children: <Profile_Security />,
    },
    {
      key: '2',
      label: <p className='text-white'>Платежная информация</p>,
      children: <Profile_Main />,
    },
    {
      key: '3',
      label: <p className='text-white'>Безопасность</p>,
      children: 'Content of Tab Pane 2',
    },
    {
      key: '4',
      label: <p className='text-white'>Сессии</p>,
      children: 'Content of Tab Pane 2',
    },
    {
      key: '5',
      label: <p className='text-white'>Ключи API</p>,
      children: 'Content of Tab Pane 2',
    },
    {
      key: '6',
      label: <p className='text-white'>Настройки панели</p>,
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <div className='bg-[#181D20] h-screen font-mainFont'>
      <div className='p-[100px]'>
        <Tabs defaultActiveKey='1' items={items} tabPosition='left' className='text-white font-mainFont' />
      </div>
    </div>
  )
}

export default Profile
