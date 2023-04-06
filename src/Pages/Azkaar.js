import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import Title from "../components/Title/Title";
import hundleTitle from "../hundleTitle";
import { NavLink } from "react-router-dom";

function Azkaar() {
  hundleTitle("الأذكار");
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <MainTitle text={"الأذكار"} />
          <div className={"azkaar-container"}>
            <NavLink to={"/azkar/morning"}>
              <Title text={"أذكار الصباح"} />
            </NavLink>
            <NavLink to={"/azkar/evening"}>
              <Title text={"أذكار المساء"} />
            </NavLink>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Azkaar;
