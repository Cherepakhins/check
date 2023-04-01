import { MainInforamtion } from "../components/MainInformation/MainInformation";
import { Partners } from "../components/Partners/Partners";
import { Instruction } from "../components/Instruction/Instruction";
import "./styles.css";
const Main: React.FC = () => {
  return (
    <div className="main ">
      <MainInforamtion />
      <Partners />
      <Instruction />
    </div>
  );
};
export { Main };
