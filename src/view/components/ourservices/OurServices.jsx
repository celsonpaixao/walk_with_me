import SignInButton from "../signinbutton/signinbutton";
import style from "./OurServices.module.css";
function OurServices() {
  return (
    <div className={style.ourservices_container}>
      <div className="container">
        <div className={style.ourservices_container_body}>
          <div className={style.ourservices_container_body_1}>
            <h1>our Services</h1>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a{" "}
            </p>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a{" "}
            </p>
            <SignInButton />
          </div>
          <div className={style.ourservices_container_body_2}>
            <img src="src/assets/mockup_2.png" alt="mockup2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
