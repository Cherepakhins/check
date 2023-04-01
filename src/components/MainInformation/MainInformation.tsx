import cover from "./img/main-cover.png";
import video from "./img/video.png";
import "./styles.css";
const MainInforamtion: React.FC = () => {
  return (
    <div className="">
      <div
        className="main-information main-cover"
        style={{
          backgroundImage: `url(${cover})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw"
        }}
      >
        <div className="container">
          <div className="main-information__card card">
            <h1 className="card__title title">StorySong</h1>
            <p className="card__description">
              Онлайн-платформа, объединяющая музыкантов со всей России, а также
              людей, желающих заказать песню в подарок.
            </p>
            <button className="btn">Заказать песню</button>
          </div>
          <div
            className="main-information__video"
            style={{
              backgroundImage: `url(${video})`,
              width: "538px",
              height: "357px"
            }}
          >
            <button className="btn-play">
              <div className="btn-play__icon"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export { MainInforamtion };
