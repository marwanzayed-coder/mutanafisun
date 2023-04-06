import { Link } from "react-router-dom";
import "./Card.css";

function Card({ key, name, soraNumber, azkarNumber, slahDay, num, img, link }) {
  return (
    <div className="card" key={key}>
      <div className="profile">
        <div className="profile-data">
          <img
            src={
              img ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHTrTXBrPLFrP2Kt5_9ne8YvUaBahWmL4QiPxW03U&s"
            }
            alt="profile-picture"
          />
          <Link to={link}>
            <p>{name}</p>
          </Link>
        </div>
        <div className="profile-number">
          <span>{num}</span>
        </div>
      </div>
      <div className="profile-details">
        <div className="flex-data">
          <p>
            عدد السور: <span className="data">{soraNumber}</span>
          </p>
          <p>
            عدد الأذكار: <span className="data">{azkarNumber}</span>
          </p>
        </div>
        <p>
          الحفاظ على الصلاه: <span className="data">{slahDay} يوم</span>
        </p>
      </div>
    </div>
  );
}

export default Card;
