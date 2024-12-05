export const About = () => {
  return (
    <section className="w-full mb-[40px] md:mb-[200px] px-4 md:px-0">
      <div className="flex flex-col xl:flex-row gap-0 md:gap-[60px]">
        <h2>
          Инфлюенсер <br />
          маркетинг <br />
          агентство <br />
          полного цикла
        </h2>

        <div className="flex flex-col flex-1 mt-0 xl:mt-[200px]">
          <div className="flex flex-col md:flex-row py-10 border-b-[1px] border-[--gold] justify-between">
            <span className="text-nowrap mb-4 md:mb-0">Creative</span>
            <p className="inter max-w-[800px] md:max-w-[404px] xl:max-w-[358px] min-[1910px]:max-w-[800px]">
              Индивидуальный подход в разработке промо кампании: от постановки
              целей и создания уникального креатива до полной реализации
              проекта.
            </p>
          </div>

          <div className="flex flex-col md:flex-row py-10 border-b-[1px] border-[--gold] justify-between">
            <span className="text-nowrap mb-4 md:mb-0">Sales House</span>
            <p className="inter max-w-[800px] md:max-w-[404px] xl:max-w-[358px] min-[1910px]:max-w-[800px]">
              Официальный селлер рекламы у блогеров, журналистов и звезд
              шоу-бизнеса. Курируем все аспекты сотрудничества между брендом и
              исполнителем.
            </p>
          </div>

          <div className="flex flex-col md:flex-row py-10 border-b-[1px] border-[--gold] justify-between">
            <span className="text-nowrap mb-4 md:mb-0">Data Expert</span>
            <p className="inter max-w-[800px] md:max-w-[404px] xl:max-w-[358px] min-[1910px]:max-w-[800px]">
              Медиапланирование с использованием собственных аудиторных данных.
              Подборка блогеров, максимально отвечающих ценностям бренда.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
