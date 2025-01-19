import { Button } from "antd"
import { CiLock } from "react-icons/ci"
import { FaLock } from "react-icons/fa"
import { IoMdMailUnread } from "react-icons/io"
import { IoShieldHalfSharp, IoShieldOutline } from "react-icons/io5"
import { MdLocalPhone } from "react-icons/md"

const Profile_Security = () => {
  return (
    <div className='flex flex-col gap-6'>

      <h1 className='text-3xl'>Безопасность</h1>
      <div className='flex flex-col text-[#C1C6C9] gap-8'>
        <h2 className='text-xl'>Данные аккаунта</h2>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 items-center">
            <MdLocalPhone size={30} />
            <div className="flex flex-col">
              <p>Телефон</p>
              <p className="text-red-700">Телефон не добавлен</p>
            </div>
          </div>
          <Button className="flex" danger>Добавить</Button>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 items-center">
            <IoMdMailUnread size={30} />
            <div className="flex flex-col">
              <p>Электронная почта</p>
              <p className="text-red-700">Почта не добавлена</p>
            </div>
          </div>
          <Button className="flex" danger>Изменить</Button>
        </div>

      </div>

      <div className='flex flex-col text-[#C1C6C9] gap-8'>

        <h2 className='text-xl'>Способ входа в аккаунт</h2>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 items-center">
            <CiLock size={30} />
            <div className="flex flex-col">
              <p>Пароль</p>
              <p className="text-red-700">Телефон не добавлен</p>
            </div>
          </div>
          <Button className="flex" danger>Изменить</Button>
        </div>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-6 items-center">
            <IoShieldOutline size={30} />
            <div className="flex flex-col">
              <p>Двухэтапная аутентификация</p>
              <p className="text-red-700">Не подключена</p>
            </div>
          </div>
          <Button className="flex" danger>Включить</Button>
        </div>

      </div>

    </div>
  )
}

export default Profile_Security
