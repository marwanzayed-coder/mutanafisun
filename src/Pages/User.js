import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import UserDetail from "../components/UserDetail/UserDetail";
import hundleTitle from "../hundleTitle";

function User() {
    hundleTitle(); ////////////////////////////////////
  return (
    <>
      <Header />
      <main>
        <div className={"container"}>
          <div className={"user-profile"}>
            {/* <img src="images/klipartz.com.png" alt="user-image"> */}
            <h3>Mohammed Refaat</h3>
            <p>Xmemo@</p>
            <p>قل الحمدلله وسلاما على عباده الذين إصطفى</p>
          </div>
          <div className={"user-details"}>
            <UserDetail />
            <UserDetail />
            <UserDetail />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default User;
