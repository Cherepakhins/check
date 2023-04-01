import "./styles.css";

const Instruction: React.FC = () => {
  return (
    <div className="instruction ">
      <h2 className="instruction__title">Как заказать песню</h2>
      <ul className="instruction__list">
        <li className="instruction__item instruction-item">
          <div className="instruction-item__container">
            <div className="instruction-item__circle">1</div>
            <p className="instruction-item__title">Анкета</p>
          </div>
          <p className="instruction-item__description">
            Заполняете анкету, описываете подробности, уточняете детали,
            выбираете исполнителя и категорию стиля песни.
          </p>
        </li>
        <li className="instruction__item instruction-item">
          <div className="instruction-item__container">
            <div className="instruction-item__circle">2</div>
            <p className="instruction-item__title">Оплата</p>
          </div>
          <p className="instruction-item__description">
            Вносите предоплату. Исполнитель пишет демо-версию текста, отправляет
            ее вам.
          </p>
        </li>
        <li className="instruction__item instruction-item">
          <div className="instruction-item__container">
            <div className="instruction-item__circle">3</div>
            <p className="instruction-item__title">Отслеживание готовности</p>
          </div>
          <p className="instruction-item__description">
            Общаетесь с исполнителем, оставляете свои пожелания и правки.
            Вносите вторую часть оплаты.
          </p>
        </li>
        <li className="instruction__item instruction-item">
          <div className="instruction-item__container">
            <div className="instruction-item__circle">4</div>
            <p className="instruction-item__title">Получение продукта</p>
          </div>
          <p className="instruction-item__description">
            Получаете готовую песню.
          </p>
        </li>
      </ul>
    </div>
  );
};
export { Instruction };
