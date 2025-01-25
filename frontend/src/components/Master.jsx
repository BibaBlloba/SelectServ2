// import { Button } from "@mui/material";
import { Button } from "antd";
import image1 from "../assets/image1.png";
import { Info, Footer, MobileFooter, Price } from "./index";
import Sponsor from "./Sponsor";
import ButtonConsole from "./ButtonConsole";

function Master() {
  return (
    <div>
      <div className="flex flex-row justify-center items-center min-h-screen 2xl:gap-[200px]">
        <div className="mx-10">
          <div className="text-white text-4xl sm:inline hidden font-bold">
            <h1>Серверы.</h1>
            <h1>Облако. Дата-центры.</h1>
          </div>
          <div className="text-white text-4xl sm:hidden font-bold mb-5">
            <h1>Серверы.</h1>
            <h1>Облако.</h1>
            <h1>Дата-центры.</h1>
          </div>
          <div className="text-white max-w-[500px] mb-5">
            Строим и поддерживаем IT-инфраструктуру компаний, которые создают
            и развивают цифровые продукты.
          </div>
          <ButtonConsole />
        </div>
        <div className="hidden min-[1000px]:inline">
          <img className="aspect-[6/4] w-[460px] 2xl:w-[740px]" src={image1} />
        </div>
      </div>
      <Sponsor />
      <Price />
      <Info />
      {/* <MobileFooter /> */}
    </div>
  );
}

export default Master;
