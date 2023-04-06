import "./Footer.css";
import FooterLink from "../FooterLink/FooterLink";
import logo from "../logo.png";
import FooterTitle from "../FooterTitle/FooterTitle";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div class="container">
          <div class="copy">
            <div class="logo">
              <img src={logo} className="logo" />
            </div>
            <p>جميع الحقوق محفوظه لعام2023</p>
            <p>
              صنع بكل <span>&hearts;</span> لكل مسلم
            </p>
          </div>
          <div class="links">
            <div class="one">
              <FooterTitle value={"الصفحات الرئيسيه"} />
              <Link to={"/"}>
                <FooterLink value={"الرئيسيه"} />
              </Link>
              <Link to={"/heightop"}>
                <FooterLink value={"المتصدرون"} />
              </Link>
              <Link to={"/sala"}>
                <FooterLink value={"الصلاه"} />
              </Link>
              <Link to={"/quran"}>
                <FooterLink value={"المصحف"} />
              </Link>
              <Link to={"/zakah"}>
                <FooterLink value={"حاسبة الزكاه"} />
              </Link>
            </div>
            <div class="tow">
              <FooterTitle value={"صفحات الأذكار"} />
              <FooterLink value={"أذكار الصباح"} />
              <FooterLink value={"أذكار المساء"} />
              <FooterLink value={"الرقيه الشرعيه"} />
            </div>
            <div class="three">
              <FooterTitle value={"قد يهمك"} />
              <Link to={"/team"}>
                <FooterLink value={"فريق التطوير"} />
              </Link>
              <Link to={"/report"}>
                <FooterLink value={"الإبلاغ عن مشكله"} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
