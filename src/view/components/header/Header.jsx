import SignInButton from "../signinbutton/signinbutton";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.header_container}>
      <div className="container">
        <div className={style.header_container_nav_container}>
          <div>
            <img src="src/assets/Group 19441.png" alt="Logo" />
          </div>

          <nav className={style.header_container_nav_body}>
            <ul>
              <li>Home</li>
              <li>Our Services</li>
              <li>How the platform works</li>
              <li>About us</li>
              <li>Contacts</li>
            </ul>
          </nav>

          <div>
            {" "}
            <SignInButton />
          </div>
        </div>

        <div className={style.header_container_body_container}>
          <div className={style.header_container_body_1}>
            <div className={style.header_container_body_1_title}>
              <h1>
                Da sua
                <br />
                segurança
                <br />
                cuidamos nós!
                <br />
              </h1>
              <div>
                <h2>WALK</h2>
                <h3> WITH</h3>
                <h2>WITH</h2>
              </div>
            </div>

            <p className={style.header_container_body_1_description}>
              Esteja mais seguro e protegido com o WALK WITH ME, esteja onde
              estiver,
              <br /> estaremos consigo, garantindo socorro em tempo recorde e
              recuperação de itens
              <br /> roubados, acompanhamento do ocorrido em tempo real.
            </p>

            <div className={style.header_container_body_1_hero}>
              <button>
                {" "}
                <FaApple /> App Store
              </button>
              <button>
                {" "}
                <FaGooglePlay /> Play Store
              </button>
              <div>
                Assistir o video
                <div>
                  <FaPlay />
                </div>
              </div>
            </div>
          </div>

          <div className={style.header_container_body_2}>
            <div className={style.header_container_body_render_container}>
              <img src="src\assets\render_header.png" alt="render" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
