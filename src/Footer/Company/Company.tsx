import "./styles.css";
import { Link } from "react-router-dom";

const Company: React.FC = () => {
  return (
    <div className="company">
      <h2 className="company__title">Компания</h2>
      <ul className="company__list">
        <li className="company__item">
          <Link to="#">Условия использования</Link>
        </li>
        <li className="company__item">
          <Link to="#">Политика конфиденциальности</Link>
        </li>
        <li className="company__item">
          <Link to="#">Стать амбассадором песню</Link>
        </li>
        <li className="company__item">
          <Link to="#">Условия редактирования песни</Link>
        </li>
      </ul>
    </div>
  );
};
export { Company };
