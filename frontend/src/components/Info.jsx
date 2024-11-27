import { MasterRegister } from "./index";

const Info = () => {
  return (
    <div>
      <MasterRegister />
      <div>
        <div className="flex flex-col bg-red-50 justify-start items-center py-[100px]">
          <h1 className="sm:text-4xl text-3xl font-bold mb-6">
            Почему нас выбирают
          </h1>
          <div className="grid sm:grid-cols-3 sm:grid-rows-2 justify-evenly">
            <div className="flex flex-col sm:m-10 m-5 max-w-[400px]">
              <h1 className="text-xl font-bold mb-5">
                Все для быстрого старта
              </h1>
              <p className="text-lg">
                Понятная консоль управления сервисами, подробные руководства и
                документация с пошаговыми инструкциями.
              </p>
            </div>
            <div className="flex flex-col sm:m-10 m-5 max-w-[400px]">
              <h1 className="text-xl font-bold mb-5">Большой выбор сервисов</h1>
              <p className="text-lg">
                Инструменты для разработки и хостинга микросервисных приложений,
                вычислений, аналитики данных, два суперкомпьютера для работы с
                AI.
              </p>
            </div>
            <div className="flex flex-col sm:m-10 m-5 max-w-[400px]">
              <h1 className="text-xl font-bold mb-5">Защищенные ЦОД</h1>
              <p className="text-lg">
                Шесть дата-центров с уровнем надежности Tier III и SLA 99,982%.
                Современные серверы и последние версии ПО.
              </p>
            </div>
            <div className="flex flex-col sm:m-10 m-5 max-w-[400px]">
              <h1 className="text-xl font-bold mb-5">Безопасность данных</h1>
              <p className="text-lg">
                Сертификаты для работы с персональными данными, ГИС,КИИ и
                финансовыми операциями.
              </p>
            </div>
            <div className="flex flex-col sm:m-10 m-5 max-w-[400px]">
              <h1 className="text-xl font-bold mb-5">
                В поддержке люди, а не боты
              </h1>
              <p className="text-lg">
                Круглосуточная связь с поддержкой по телефону, почте и в
                Telegram. Среднее время реакции — 15 минут.
              </p>
            </div>
            <div className="flex flex-col sm:m-10 m-5 max-w-[400px]">
              <h1 className="text-xl font-bold mb-5">
                Команда опытных разработчиков
              </h1>
              <p className="text-lg"></p>1 400 специалистов работают над
              запуском наших собственных IaaS- и PaaS-сервисов.
            </div>
          </div>
        </div>
        <div className="bg-[url(./assets/blue_bg.png)] bg-cover min-h-screen flex flex-col justify-start items-center text-white sm:p-24 p-5 sm:bg-center bg-[left_bottom]">
          <h1 className="sm:text-5xl text-3xl">Инфоструктура по всей России</h1>
          <div className="flex sm:flex-row flex-col gap-10 sm:gap-0 justify-around sm:p-16 p-5 text-lg">
            <div className="max-w-[350px]">
              У нас 6 своих дата-центров в Москве, Санкт-Петербурге и
              Ленинградской области. И партнерский — в Новосибирске.
            </div>
            <div className="max-w-[350px]">
              Такая геораспределенная сеть обеспечивает максимальную
              отказоустойчивость.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
