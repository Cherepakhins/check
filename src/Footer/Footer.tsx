import "./styles.css";
import { Company } from "./Company/Company";
import { FooterNav } from "./FooterNav/FooterNav";
import { Social } from "./Social/Social";
import { LogoBlack } from "../ui/Logo/LogoBlack";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <Company />
        <FooterNav />
        <Social />
      </div>
      <div className="byAuthor">
        <LogoBlack />
        <p>Copyright 2023 ©StorySong</p>
      </div>
    </div>
  );
};
export { Footer };
