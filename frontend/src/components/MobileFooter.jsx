import { Menu } from "antd";

const items = [
  {
    key: "sub1",
    label: "О нас",
    children: [],
  },
  {
    key: "sub2",
    label: "Работа",
    children: [
      {
        key: "1",
        label: "Вакансии",
      },
    ],
  },
];

const MobileFooter = () => {
  return (
    <div className="bg-slate-900 text-gray-400 p-5 sm:hidden flex flex-col justify-start">
      <Menu
        // onClick={onClick}
        // defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
        theme="dark"
      />
    </div>
  );
};

export default MobileFooter;
