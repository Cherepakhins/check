import { Link } from "react-router-dom";
import "./styles.css";
import vk from "./img/vk.svg";
import utube from "./img/utube.svg";
import instagram from "./img/instagram.svg";

const Social: React.FC = () => {
  return (
    <div className="social ">
      <h2 className="social__title">Мы в соц. сетях</h2>
      <ul className="social__list">
        <li className="social__item">
          <Link to="https://vk.com/storysong">
            <img src={vk} alt="" />
          </Link>
        </li>
        <li className="social__item">
          <Link to="https://www.instagram.com/storysong_official/?hl=ru">
            <img src={instagram} alt="" />
          </Link>
        </li>
        <li className="social__item">
          <Link to="https://youtube.com/@storysong-live">
            <img src={utube} alt="" />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export { Social };
