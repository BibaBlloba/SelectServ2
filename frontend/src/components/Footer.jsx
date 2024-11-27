import { FaTelegramPlane, FaLinkedin, FaYoutube, FaVk } from "react-icons/fa";
import { Button } from "antd";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-gray-400 p-5 sm:flex hidden flex-col justify-start">
      <h1 className="text-xl sm:text-2xl font-medium mb-8 text-gray-300">
        Select Serv
      </h1>

      <div className="flex justify-start gap-20 pl-5 text-gray-200">
        <div className="flex flex-col gap-1">
          <p className="text-gray-400">О нас</p>
          <p>Безопасность</p>
          <p>Дата-центры</p>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-gray-400">Работа</h1>
          <a className="">Вакансии</a>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="mb-2 text-gray-400">Документация</h1>
          <a className="">Руководство Пользователя</a>
          <a className="">API</a>
        </div>
        <div>
          <h1 className="mb-2 text-gray-400">Соц. Сети</h1>
          <div className="flex gap-2">
            <a>
              <Button color="default" variant="outlined" shape="circle">
                <FaTelegramPlane />
              </Button>
            </a>
            <a>
              <Button color="default" variant="outlined" shape="circle">
                <FaLinkedin />
              </Button>
            </a>
            <a>
              <Button color="default" variant="outlined" shape="circle">
                <FaYoutube />
              </Button>
            </a>
            <a>
              <Button color="default" variant="outlined" shape="circle">
                <FaVk />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
