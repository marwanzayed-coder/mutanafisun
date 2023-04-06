import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Input from "../components/Input/Input";
import MainTitle from "../components/MainTitle/MainTitle";
import hundleTitle from "../hundleTitle";

function Report() {
  hundleTitle("إبلاغ عن مشكله");
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <MainTitle text={"إبلاغ عن مشكله او مطالبه بتحديث"} />
          <div className={"report-container"}>
            <form>
              <textarea rows={"15"} maxLength={600}></textarea>
              <Input
                type={"submit"}
                id={9}
                value={"إرسال"}
                style={{ color: "var(--third-color)" }}
              />
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Report;
