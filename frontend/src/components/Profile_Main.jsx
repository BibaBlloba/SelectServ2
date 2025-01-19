import React from 'react'

const Profile_Main = () => {
  return (
    <div className='flex flex-col gap-6'>
      <h1 className='text-3xl'>Профиль</h1>
      <h2 className='text-xl'>Данные профиля</h2>
      <div className='flex flex-row text-[#C1C6C9] gap-16'>
        <div className='flex flex-col gap-6'>
          <p>ФИО</p>
          <p>ПОЧТА</p>
          <p>ID</p>
          <p>Роль</p>
        </div>
        <div className='flex flex-col gap-6'>
          <p>ФИО</p>
          <p>ПОЧТА</p>
          <p>ID</p>
          <p>Роль</p>
        </div>
      </div>
    </div>
  )
}

export default Profile_Main
