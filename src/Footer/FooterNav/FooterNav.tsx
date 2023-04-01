import "./styles.css";
import { Link } from "react-router-dom";

const FooterNav: React.FC = () => {
  return (
    <div className="footer-nav">
      <h2 className="footer-nav__title">Навигация</h2>
      <ul className="footer-nav__list">
        <li className="footer-nav__item">
          <Link to="#">Исполнители</Link>
        </li>
        <li className="footer-nav__item">
          <Link to="#">Заказать песню</Link>
        </li>
        <li className="footer-nav__item">
          <Link to="#">Для исполнителя</Link>
        </li>
      </ul>
    </div>
  );
};
export { FooterNav };
