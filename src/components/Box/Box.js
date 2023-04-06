import { Link } from "react-router-dom";

function Box({ link, name, ayat, key }) {
  return (
    <div className="box" key={key}>
      <Link to={link} className="data">
        {name}
      </Link>
      <p>
        عدد الأيات: <span className="data">{ayat}</span>
      </p>
    </div>
  );
}

export default Box;
