import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Time from "../components/time/time";
import Card from "../components/Card/Card";
import Title from "../components/Title/Title";
import hundleTitle from "../hundleTitle";
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  hundleTitle("الرئيسيه");
  const [time, setTime] = useState({});
  const [qurqn, setQuran] = useState([]);
  const [leader, setLeader] = useState([]);
  const [loader, setLoader] = useState("Loading..");
  useEffect(() => {
    axios
      .get(
        "http://api.aladhan.com/v1/timingsByCity?city=cairo&country=egypt&method=8"
      )
      .then((response) => {
        setTime(response.data.data.timings);
      });
    axios
      .get(
        "https://odd-gold-coati-belt.cyclic.app/api/v1/leaderboards/topthree"
      )
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
          <section className={"home"}>
            <div className={"intro"}>
              <div className={"intro-text"}>
                <p className={"intro-title"}>أهلا بك في موقع متنافسون</p>
                <p className={"intro-discription"}>
                  موقع متنافسون هو موقع لتشجيع المسلمين عل الصلاه والأذكار
                  وقراءة القرآن الكريم
                </p>
              </div>
            </div>

            <div className={"top"}>
              <Title text={"أقوى المتصدرون"} />
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
            <Title text={"أوقات الصلاه"} />
            <div className={"times"}>
              <div className={"time-cards"}>
                <Time time={time.Fajr} data={"الفجر"} />
                <Time time={time.Sunrise} data={"الشروق"} />
                <Time time={time.Dhuhr} data={"الضهر"} />
                <Time time={time.Asr} data={"العصر"} />
                <Time time={time.Maghrib} data={"المغرب"} />
                <Time time={time.Isha} data={"العشاء"} />
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
