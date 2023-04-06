import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import Title from "../components/Title/Title";
import { Link } from "react-router-dom";
import hundleTitle from "../hundleTitle";

function Settings() {
  hundleTitle("الإعدادات");
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <MainTitle text={"الإعدادات"} />
          <div class={"settings"}>
            <Title text={"الوضع"} />
            <select name="" id="">
              <option value="Dark">مظلم</option>
              <option value="light">فاتح</option>
            </select>
            <Link to={"/user-info/username"}>
              <Title text={"تعديل معلوماتك"} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Settings;
