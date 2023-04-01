import "./styles.css";
import { Link } from "react-router-dom";
import logoBlack from "./img/logoBlack.svg";

const LogoBlack: React.FC = () => {
  return (
    <div className="logo">
      <Link to="/" className="link">
        <img src={logoBlack} width="82px" height="82px" />
      </Link>
    </div>
  );
};
export { LogoBlack };
