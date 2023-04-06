import React, { useState } from "react";
import MainTitle from "../components/MainTitle/MainTitle";
import hundleTitle from "../hundleTitle";
import { Link } from "react-router-dom/dist";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function SignIn() {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);

  const [data, setData] = useState({});
  let navigate = useNavigate();
  const changeFunc = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://odd-gold-coati-belt.cyclic.app/api/v1/auth/login",
      data
    );
    setCookie("login", true);

    navigate("/");
  };
  hundleTitle("تسجيل الدخول");
  return (
    <>
      <main>
        <div className={"container"}>
          <MainTitle text={"تسجيل الدخول"} />
          <div className={"account-container"}>
            <form method="POST" onSubmit={sendData}>
              <div className={"user"}>
                <label htmlFor={"email"}>البريد الإلكتروني</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => changeFunc(e.target.name, e.target.value)}
                />
              </div>
              <div className={"password"}>
                <label htmlFor={"password"}>كلمة المرور</label>
                <input
                  type={"password"}
                  id="password"
                  name="password"
                  onChange={(e) => changeFunc(e.target.name, e.target.value)}
                />
              </div>
              <input type={"submit"} value={"تسجيل الدخول"} />
            </form>
            <div className={"account"}>
              <span>
                لا تمتلك حساب: <Link to="/signup">أنشئ حساب</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignIn;
