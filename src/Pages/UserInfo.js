import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MainTitle from "../components/MainTitle/MainTitle";
import hundleTitle from "../hundleTitle";

function UserInfo() {
  hundleTitle("تعديل المعلومات");
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <MainTitle text={"تعديل معلوماتك"} />
          <form className={"user-info"}>
            <label htmlFor={"main-name"} className={"title"}>
              تغير الأسم
            </label>
            <input type={"text"} id={"main-name"} />

            <label htmlFor={"user-name"} className={"title"}>
              تغير إسم المستخدم
            </label>
            <input type={"text"} id={"user-name"} />

            <label htmlFor={"user-caption"} className={"title"}>
              تغير الوصف
            </label>
            <input type={"text"} id={"user-caption"} />

            <label htmlFor={"user-email"} className={"title"}>
              تغير البريد الإلكتروني
            </label>
            <input type={"text"} id={"user-email"} />

            <label htmlFor={"user-photo"} className={"title"}>
              تغير الصوره
            </label>
            <input
              type={"file"}
              className={"file-input"}
              accept={"image/*"}
              hidden
            />
            <input type={"submit"} className={"choose-img"} value={"upload"} />
            <input type={"submit"} value={"حفظ المعلومات"} />
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default UserInfo;
