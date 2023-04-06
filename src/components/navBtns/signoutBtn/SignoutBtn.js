import { Link } from "react-router-dom";

function SignoutBtn() {
  return (
    <>
      <button>
        <Link to={"/"}>تسجيل الخروج</Link>
      </button>
    </>
  );
}

export default SignoutBtn;
