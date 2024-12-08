import { Menu } from 'antd'
import React from 'react'
import { FaInfoCircle, FaMoneyBill } from 'react-icons/fa'
import { IoPerson } from 'react-icons/io5'
import { TbBellRingingFilled } from 'react-icons/tb'
import { Route, Routes, useNavigate } from 'react-router-dom'

const items = [
  {
    key: "/profile/nav1",
    label: "Основные",
    icon: <IoPerson size={20} />
  },
  {
    key: "/profile/nav2",
    label: "Платежная информация",
    icon: <FaMoneyBill size={20} />
  },
  {
    key: "/profile/nav3",
    label: "Уведомления",
    icon: <TbBellRingingFilled size={20} />
  },
  {
    key: "/profile/nav4",
    label: "Информация",
    icon: <FaInfoCircle size={20} />
  },
]


const Profile = () => {
  const navigate = useNavigate()

  return (
    <div className='pt-20 bg-white flex flex-row'>
      <div className='p-36 flex flex-row'>
        <Menu
          className='min-w-[300px] text-xl'
          items={items}
          onClick={({ key }) => {
            navigate(key)
          }}
        ></Menu>
        <Content />
      </div>
    </div>
  )
}

function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<div>a</div>}></Route>
        <Route path="/nav2" element={<div>b</div>}></Route>
        <Route path="/nav3" element={<div>c</div>}></Route>
        <Route path="/nav4" element={<div>d</div>}></Route>
      </Routes>
    </div>
  )
}

export default Profile
