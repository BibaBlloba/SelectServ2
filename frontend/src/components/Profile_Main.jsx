import React, { useEffect, useState } from 'react'

const Profile_Main = () => {

  const [token] = useState(localStorage.getItem("UserToken"))
  const [email, setEmail] = useState("")
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      }
      const response = await fetch("/api/users/me", requestOptions)
      const data = await response.json()
      setData(data)
    }

    fetchUser();
  }, [])

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
          <p>Нет данных</p>
          {data ? (
            <p>{data.email}</p>
          ) : <p>Нет данных</p>}
          <p>Нет данных</p>
          <p>Нет данных</p>
        </div>
      </div>
    </div>
  )
}

export default Profile_Main
