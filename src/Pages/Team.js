import DevCard from "../components/DevCard/DevCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import hundleTitle from "../hundleTitle";

function Team() {
  hundleTitle("فريق التطوير");
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <MainTitle text={"فريق التطوير"} />
          <div className={"devs"}>
            <DevCard />
            <DevCard />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Team;
