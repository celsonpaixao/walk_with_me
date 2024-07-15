import { IoArrowForward } from "react-icons/io5";
import style from "./signinbutton.module.css";

function SignInButton() {
  return (
    <button className={style.buuton_container}>
      Sign In <IoArrowForward />
    </button>
  );
}

export default SignInButton;
