import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import MainTitle from "../components/MainTitle/MainTitle";
import hundleTitle from "../hundleTitle";

function Zakah() {
  const[money, setMoney] = useState(0);
  hundleTitle("حاسبة الزكاه");
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <MainTitle text={"حاسبة الزكاه"} />
          <div className={"calc"}>
            <h3>الزكاه المطلوب دفعها :{money}</h3>
            <input
              type={"text"}
              className={"input"}
              onChange={
                e => setMoney(e.target.value * 2.5)
              }
            />
            <Input
              type={"submit"}
              value={"إحسب"}
              style={{ color: "var(--third-color)" }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Zakah;
