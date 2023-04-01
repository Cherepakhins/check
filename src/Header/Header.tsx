import { Nav } from "./Nav/Nav";
import { LogoWhite } from "../ui/Logo/LogoWhite";

import "./styles.css";
const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__container container">
        <LogoWhite />
        <Nav />
        <div>Авторизация</div>
      </div>
    </div>
  );
};
export { Header };
