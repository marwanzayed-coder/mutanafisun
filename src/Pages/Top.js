import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Card from "../components/Card/Card";
import MainTitle from "../components/MainTitle/MainTitle";
import hundleTitle from "../hundleTitle";
import { useEffect, useState } from "react";
import axios from "axios";

function Top() {
  hundleTitle("المتصدرون");
  const [time, setTime] = useState({});
  const [leader, setLeader] = useState([]);
  const [loader, setLoader] = useState("Loading..");
  useEffect(() => {
    axios
      .get("https://odd-gold-coati-belt.cyclic.app/api/v1/leaderboards")
      .then((res) => {
        setLeader(res.data.leaderboard);
        setLoader("");
      });
  }, [leader, time]);
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <MainTitle text={"قائمة المتصدرون"} />
          <div className={"heigh-top"}>
            {leader.map((item, i) => (
              <Card
                key={item._id}
                name={item.user.fullname}
                soraNumber={item.soraNumber}
                azkarNumber={item.azkarNumber}
                slahDay={item.slahDay}
                num={i + 1}
                link={`/users/${item.user.username}`}
              />
            ))}
            {loader}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Top;
