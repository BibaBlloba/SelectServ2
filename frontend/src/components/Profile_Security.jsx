import { Button, Modal } from "antd"
import { CiLock } from "react-icons/ci"
import { FaLock } from "react-icons/fa"
import { IoMdMailUnread } from "react-icons/io"
import { IoShieldHalfSharp, IoShieldOutline } from "react-icons/io5"
import { MdLocalPhone } from "react-icons/md"
import Button_dark from "./Button_dark"
import { useEffect, useState } from "react"

const Profile_Security = () => {

  const [token] = useState(localStorage.getItem("UserToken"))
  const [data, setData] = useState(null)
  const [phone, setPhone] = useState(null)
  const [phoneModal, setPhoneModal] = useState(false)
  const [email] = useState(localStorage.getItem("UserEmail"))
  // const [phoneModal, setPhoneModal] = useState(false)

  const showPhoneModel = () => {
    setPhoneModal(true)
  }

  const handleCancel = () => {
    setPhoneModal(false)
  }

  const fetchUser = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      }
    }
    const response = await fetch("http://localhost:8000/users/me", requestOptions)
    const data = await response.json()
    setData(data)
    if (data.phone_number) {
      setPhone(data.phone_number)
    }
  }

  const fetchPhone = async () => {
    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ phone_number: phone })
    }
    const response = await fetch("http://localhost:8000/users/me", requestOptions)
    const data = await response.json()
    window.location.reload()
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div className='flex flex-col gap-6'>

      <h1 className='text-3xl'>Профиль</h1>
      <div className='flex flex-col text-[#C1C6C9] gap-8'>
        <h2 className='text-xl'>Данные аккаунта</h2>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 items-center">
            <MdLocalPhone size={30} />
            <div className="flex flex-col">
              <p>Телефон</p>
              {phone ? (
                <p>{data.phone_number}</p>
              ) : <p className="text-red-700">Телефон не добавлен</p>}
            </div>
          </div>
          <Button_dark text="Добавить" onClick={showPhoneModel} />
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 items-center">
            <IoMdMailUnread size={30} />
            <div className="flex flex-col">
              <p>Электронная почта</p>
              <p>{email}</p>
            </div>
          </div>
          <Button_dark text="Изменить" />
        </div>
      </div>

      <div className='flex flex-col text-[#C1C6C9] gap-8'>

        <h2 className='text-xl'>Способ входа в аккаунт</h2>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 items-center">
            <CiLock size={30} />
            <div className="flex flex-col">
              <p>Пароль</p>
              <p>Изменить пароль</p>
            </div>
          </div>
          <Button_dark text="Изменить" />
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 items-center">
            <IoShieldOutline size={30} />
            <div className="flex flex-col">
              <p>Двухэтапная аутентификация</p>
              <p className="text-red-700">Не подключена</p>
            </div>
          </div>
          <Button_dark text="Включить" />
        </div>

      </div>

      <Modal open={phoneModal} onCancel={handleCancel} onOk={fetchPhone}>
        <p className="my-2">Введите новый номер телефона:</p>
        <input type="text" className="bg-gray-300 rounded-md h-10 w-60 p-3" placeholder="+7 900 000 0000" onChange={(e) => setPhone(e.target.value)}></input>
      </Modal>

    </div>
  )
}

export default Profile_Security
