import { Button } from "@mui/material";
import image1 from "../assets/image1.png";

function Master() {
  return (
    <div className="flex flex-row border-2 justify-center items-center h-screen">
      <div>
        <div className="text-white text-lg font-bold mb-5">
          <h1>Серверы.</h1>
          <h1>Облако. Дата-центры.</h1>
        </div>
        <div className="text-white max-w-[500px] mb-5">
          Строим и поддерживаем IT-инфраструктуру компаний, которые создают
          и развивают цифровые продукты.
        </div>
        <Button variant="contained">В панель управления</Button>
      </div>
      <div className="hidden lg:inline">
        <img className="aspect-video w-[460px]" src={image1} />
      </div>
    </div>
  );
}

export default Master;
