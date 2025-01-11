import { Tabs } from "antd";
import Register from "./Register";
import Login from "./Login";

const MasterRegister = () => {
  const items = [
    {
      key: '1',
      label: 'Регистраиця',
      children: <Register />,
    },
    {
      key: '2',
      label: 'Вход',
      children: <Login />,
    }
  ];

  return (
    <div className="bg-white p-5 hidden sm:block">
      <div className="max-h-[700px] bg-[url(./assets/MasterRegister.jpg)] bg-cover bg-right rounded-2xl flex flex-row p-12 justify-between">
        <div className="flex flex-col justify-between ">
          <h1 className="text-white text-5xl max-w-[200px]">
            Начните пользоваться продуктами сейчас
          </h1>
          <div className="text-white">
            <p>Остались вопросы?</p>
            <p>Свяжитесь с техподдержкой</p>
            <p>support@selectel.ru</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border-[5px] border-solid border-gray-300 p-8 w-[430px] h-[610px] flex flex-col gap-4">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      </div>
    </div>
  );
};

export default MasterRegister;
