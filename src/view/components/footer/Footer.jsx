import style from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
function Footer() {
  return (
    <div className={style.footer_container}>
      <div className="container">
        <div className={style.footer_container_body}>
          <div className={style.footer_container_body_1}>
            <div className={style.footer_container_body_1_hero}>
              <img src="src/assets/Group 19441.png" alt="logo" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className={style.footer_container_body_1_hero_platforms}>
                <img
                  src="src/assets/google-play-varelanoticias1 1.svg"
                  alt="google<-play"
                />
                <img
                  src="src/assets/baixar-na-app-store-botao-1-1024x303 1.svg"
                  alt="app_store"
                />
              </div>
            </div>

            <nav className={style.footer_container_body_nav}>
              <h1>Sitemap</h1>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Our services</li>
                <li>How the platform works</li>
                <li>Contacts</li>
              </ul>
            </nav>

            <nav className={style.footer_container_body_nav}>
              <h1>Join Us</h1>
              <ul>
                <li>Volunteer</li>
                <li>Participate in mentoring</li>
                <li>To be partner</li>
              </ul>
            </nav>

            <nav className={style.footer_container_body_nav}>
              <h1>Contact Us</h1>
              <ul>
                <li>support@monabele.co.ao</li>
                <li>+244 924545665</li>
              </ul>
            </nav>

            <nav className={style.footer_container_body_nav}>
              <h1>Terms</h1>
              <ul>
                <li>Terms and conditions</li>
                <li>Policies and privacity</li>
                <li>Recognition</li>
              </ul>
            </nav>
          </div>
          <div className={style.footer_container_body_2}>
            © 2023 Walk With Me. All rights reserved
            <div className={style.footer_container_body_2_contacts}>
              <p>
                {" "}
                <FaFacebookF />
              </p>

              <p>
                {" "}
                <AiFillInstagram />
              </p>
              <p>
                {" "}
                <FaTwitter />
              </p>
              <p>
                {" "}
                <IoLogoWhatsapp />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
