import { pricing } from "../constants";
import { Button } from "antd";

function Price() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen pb-20 bg-white ">
      <div className="flex w-full font-mainFont justify-center sm:text-5xl text-4xl pt-24 sm:pt-24 sm:mb-16 mb-0">
        Выбери свой план
      </div>
      <div className="flex sm:flex-row sm:p-0 p-9 flex-col gap-5 shrink-0">
        {pricing.map((price, index) => (
          <div
            key="price.id"
            className={`flex flex-col ${price.color} ${price.bg_color} border-2 rounded-lg p-5 pr-0 justify-between`}
          >
            <div className="flex flex-col gap-2">
              <span className="text-2xl">{price.title}</span>
              <span className="text-2xl font-bold">${price.price} / месяц</span>
              <span className="sm:max-w-[200px] sm:mr-0 mr-5 text-sm">
                {price.text}
              </span>
              <div className="mr-5 flex flex-col gap-2">
                <p className="text-lg">{price.har1}</p>
                <p className="text-lg">{price.har2}</p>
                <p className="text-lg">{price.har3}</p>
                <p className="text-lg">{price.har4}</p>
                <p className="text-lg mb-5">{price.har5}</p>
              </div>
            </div>
            <Button className="max-w-24" danger>
              Начать
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Price;

{
  /* <div className="flex flex-row"> */
}
{
  /*   <div className="flex flex-col border-black border-2 rounded-r"> */
}
{
  /*     <h1 className="m-5">aa</h1> */
}
{
  /*     <h1>aa</h1> */
}
{
  /*   </div> */
}
{
  /* </div> */
}
