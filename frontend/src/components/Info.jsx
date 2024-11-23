const Info = () => {
  return <div className="flex flex-col min-h-screen bg-white justify-start items-center">
    <h1 className="text-4xl">Почему нас выбирают</h1>
    <div className="grid grid-cols-3 grid-rows-2 justify-evenly">
      <div className="flex flex-col  m-10 max-w-[400px]"><h1 className="text-xl font-bold mb-5">Все для быстрого старта</h1><p className="text-lg">Понятная консоль управления сервисами, подробные руководства и документация с пошаговыми инструкциями.</p></div>
      <div className="flex flex-col  m-10 max-w-[400px]"><h1 className="text-xl font-bold mb-5">Большой выбор сервисов</h1><p className="text-lg">Инструменты для разработки и хостинга микросервисных приложений, вычислений, аналитики данных, два суперкомпьютера для работы с AI.</p></div>
      <div className="flex flex-col  m-10 max-w-[400px]"><h1 className="text-xl font-bold mb-5">Защищенные ЦОД</h1><p className="text-lg">Шесть дата-центров с уровнем надежности Tier III и SLA 99,982%. Современные серверы и последние версии ПО.</p></div>
      <div className="flex flex-col  m-10 max-w-[400px]"><h1 className="text-xl font-bold mb-5">Безопасность данных</h1><p className="text-lg">Сертификаты для работы с персональными данными, ГИС,КИИ и финансовыми операциями.</p></div>
      <div className="flex flex-col  m-10 max-w-[400px]"><h1 className="text-xl font-bold mb-5">В поддержке люди, а не боты</h1><p className="text-lg">Круглосуточная связь с поддержкой по телефону, почте и в Telegram. Среднее время реакции — 15 минут.</p></div>
      <div className="flex flex-col  m-10 max-w-[400px]"><h1 className="text-xl font-bold mb-5">Команда опытных разработчиков</h1><p className="text-lg"></p>1 400 специалистов работают над запуском наших собственных IaaS- и PaaS-сервисов.</div>
    </div>
  </div>;
};

export default Info;
