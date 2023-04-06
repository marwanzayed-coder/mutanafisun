import MainTitle from "../components/MainTitle/MainTitle";
import Input from "../components/Input/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import hundleTitle from "../hundleTitle";
import { useCookies } from "react-cookie";

function SignUp() {
  const [cookies, setCookie, removeCookie] = useCookies(["login"]);

  const [data, setData] = useState({});
  let navigate = useNavigate();
  const changeFunc = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const sendData = async (e) => {
    e.preventDefault();
    await axios.post(
      "https://odd-gold-coati-belt.cyclic.app/api/v1/auth/register",
      data
    );
    setCookie("login", true);
    navigate("/");
  };

  hundleTitle("إنشاء حساب");
  return (
    <>
      <main>
        <div className={"container"}>
          <MainTitle text={"إنشاء حساب"} />
          <div className={"account-container"}>
            <form method="POST" onSubmit={sendData}>
              <div className={"user"}>
                <label htmlFor={"user"}>اسمك</label>
                <input
                  type={"text"}
                  name={"fullname"}
                  onChange={(e) => changeFunc(e.target.name, e.target.value)}
                />
              </div>
              <div className={"user"}>
                <label htmlFor={"user"}>إسم المستخدم</label>
                <input
                  type={"text"}
                  name={"username"}
                  onChange={(e) => changeFunc(e.target.name, e.target.value)}
                />
              </div>
              <div className={"user"}>
                <label htmlFor={"user"}>البريد الإلكتروني</label>
                <input
                  type={"text"}
                  name={"email"}
                  onChange={(e) => changeFunc(e.target.name, e.target.value)}
                />
              </div>
              <div className={"password"}>
                <label htmlFor={"password"}>كلمة المرور</label>
                <input
                  type={"password"}
                  id={"password"}
                  name={"password"}
                  onChange={(e) => changeFunc(e.target.name, e.target.value)}
                />
              </div>
              <Input
                type={"submit"}
                value={"انشئ حساب"}
                style={{ color: "var(--third-color)" }}
              />
              <div className={"account"}>
                <span>
                  لديك حساب ؟ <a href={"/login"}>تسجيل الدخول</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
