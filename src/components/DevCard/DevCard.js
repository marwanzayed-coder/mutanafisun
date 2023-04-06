import "./DevCard.css";
import "../Card/Card.css";
import { Link } from "react-router-dom";

function DevCard() {
  return (
    <>
      <div className="dev-card card">
        {/* <img src="#"/> */}
        <h3>Mohammed Refaat</h3>
        <p>Xmemo@</p>
        <span>الموقع الشخصي: <Link to={"/"}>https://memo.net</Link></span>
        <span>إذهب إلى صفحته على الموقع: <Link to={"/"}>إذهب</Link></span>
      </div>
    </>
  );
}

export default DevCard;
