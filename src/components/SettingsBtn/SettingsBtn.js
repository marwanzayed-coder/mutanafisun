import { Link } from "react-router-dom";

function SettingsBtn() {
  return (
    <>
      <button>
        <Link to={"/settings"}>الإعدادات</Link>
      </button>
    </>
  );
}

export default SettingsBtn;
