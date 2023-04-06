import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import Input from "../components/Input/Input";
import Box from "../components/Box/Box";
import hundleTitle from "../hundleTitle";
import { useEffect, useState } from "react";
import axios from "axios";

function Quraan() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://odd-gold-coati-belt.cyclic.app/api/v1/quran")
      .then((res) => {
        setData(res.data);
      });
  }, [data, search]);
  const style = {
    width: "40%",
    margin: "1.5rem 30%",
    backgroundColor: "var(--main-color)",
  };
  hundleTitle("المصحف");
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <MainTitle text={"المصحف"} />
          <input
            type="text"
            style={style}
            className={"input"}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
          <div class={"container boxs-container"}>
            {data.map((item) => (
              <Box
                link={`/quran/${item.id}`}
                name={item.name}
                key={item.id}
                ayat={item.total_verses}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Quraan;
