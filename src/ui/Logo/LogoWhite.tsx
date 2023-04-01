import "./styles.css";
import { Link } from "react-router-dom";
import logoWhite from "./img/logoWhite.svg";

const LogoWhite: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/" className="link">
        <img src={logoWhite} width="70px" height="70px" />
      </Link>
    </div>
  );
};
export { LogoWhite };
