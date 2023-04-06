import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CheckInput from "../components/checkInput/CheckInput";
import MainTitle from "../components/MainTitle/MainTitle";
import hundleTitle from "../hundleTitle";

function Sala() {
  hundleTitle("الصلاه");
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <MainTitle
            text={
              "إِنَّ الصَّلَاةَ كَانَتْ عَلَى الْمُؤْمِنِينَ كِتَابًا مَوْقُوتًا"
            }
          />
          <div className="list">
            <CheckInput value={"الفجر"} />
            <CheckInput value={"الضهر"} />
            <CheckInput value={"العصر"} />
            <CheckInput value={"المغرب"} />
            <CheckInput value={"العشاء"} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Sala;
