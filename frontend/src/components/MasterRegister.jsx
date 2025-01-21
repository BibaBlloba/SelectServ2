import { Tabs } from "antd";
import Register from "./Register";
import Login from "./Login";
import LoginContainer from "./LoginContainer";

const MasterRegister = () => {

  return (
    <div className="bg-white p-5 hidden sm:block">
      <div className="max-h-[720px] bg-[url(./assets/MasterRegister.jpg)] bg-cover bg-right rounded-2xl flex flex-row p-12 justify-between">
        <div className="flex flex-col justify-between">
          <h1 className="text-white text-5xl max-w-[200px] font-h1Font">
            Начните пользоваться продуктами сейчас
          </h1>
          <div className="text-white">
            <p>Остались вопросы?</p>
            <p>Свяжитесь с техподдержкой</p>
            <p>support@selectel.ru</p>
          </div>
        </div>
        <LoginContainer border />
      </div>
    </div>
  );
};

export default MasterRegister;
