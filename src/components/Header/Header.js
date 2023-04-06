import "./Header.css";
import logo from "../logo.png";
import { Link, NavLink } from "react-router-dom";
import SettingsBtn from "../navBtns/SettingsBtn/SettingsBtn";
import axios from "axios";
import { useCookies } from "react-cookie";

function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);
  const logoutFunc = async () => {
    removeCookie("login");
  };
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <Link to="/">
                <img src={logo} className={"logo"} alt="Logo" />
              </Link>
            </div>
            <div className="nav-links">
              <NavLink to={"/"}>الرئيسيه</NavLink>
              <NavLink to={"/quran"}>المصحف</NavLink>
              <NavLink to={"/heightop"}>المتصدرون</NavLink>
              <select name="" id="">
                <option value="">
                  <NavLink to={"/azkaar"}>الأذكار</NavLink>
                </option>
                <option value="">
                  <NavLink to={"/azkar/morning"}>أذكار الصباح</NavLink>
                </option>
                <option value="">
                  <NavLink to={"/azkar/evening"}>أذكار المساء</NavLink>
                </option>
                <option value="">
                  <NavLink to={"/azkar/roquia"}>الرقيه الشرعيه</NavLink>
                </option>
              </select>
            </div>
            <div className="nav-btns">
              {cookies.login ? (
                <span onClick={logoutFunc} style={{ cursor: "pointer" }}>
                  تسجيل الخروج
                </span>
              ) : (
                <Link to={"/login"}>تسجيل الدخول</Link>
              )}
              <SettingsBtn />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
