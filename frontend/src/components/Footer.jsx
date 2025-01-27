import { FaTelegramPlane, FaLinkedin, FaYoutube, FaVk } from "react-icons/fa";
import { Button } from "antd";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-gray-400 p-5 sm:flex hidden flex-col justify-start">
      <a className="text-xl sm:text-2xl font-medium mb-8 text-gray-300" href="/">
        Select Serv
      </a>

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
          <a
            href="https://1drv.ms/w/c/5a0b098562127782/EQ7iHa8C2atMuuidcPfnmEcB1q2vRcIBt6Bw4z4bbb3Zcg?e=OQL8sI"
            target="_blank"
            className=""
          >
            Предметная область
          </a>
          <a className="" href="https://github.com/BibaBlloba/SelectServ2" target="_blank">GitHub</a>
        </div>
        <div>
          <h1 className="mb-2 text-gray-400">Соц. Сети</h1>
          <div className="flex gap-2">
            <a>
              <Button color="default" variant="outlined" shape="circle">
                <a href="https://t.me/SelectServOff" target="_blank">
                  <FaTelegramPlane color="#5EB5F7" />
                </a>
              </Button>
            </a>
            <a>
              <Button color="default" variant="outlined" shape="circle">
                <FaLinkedin />
              </Button>
            </a>
            <a>
              <Button color="danger" variant="outlined" shape="circle">
                <a
                  href="https://youtu.be/dQw4w9WgXcQ?si=kZmdDEeWsQ7c97mi"
                  target="_blank"
                >
                  <FaYoutube />
                </a>
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
