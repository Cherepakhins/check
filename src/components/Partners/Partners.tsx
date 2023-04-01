import { Link } from "react-router-dom";
import "./styles.css";
import partner1 from "./img/partner1.svg";
import rosmolodej from "./img/rosmolodej.svg";
import fond from "./img/fond.svg";

const Partners: React.FC = () => {
  return (
    <div className="partners ">
      <h2 className="partners__title">Наши партнеры</h2>
      <ul className="partners__list">
        <li className="partners__item">
          <Link to="#">
            <img src={partner1} alt="" />
          </Link>
        </li>
        <li className="partners__item">
          <Link to="#">
            <img src={rosmolodej} alt="" />
          </Link>
        </li>
        <li className="partners__item">
          <Link to="#">
            <img src={fond} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export { Partners };
