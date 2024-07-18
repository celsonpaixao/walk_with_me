import style from "./Contacts.module.css";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { CiClock1 } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { LuSendHorizonal } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
function Contacts() {
  return (
    <div className={style.contacts_container}>
      <div className="container">
        <div className={style.contacts_container_body}>
          <div className={style.contacts_container_body_1}>
            <h1>contactar-nos</h1>
            <p>
              {" "}
              <IoLocationOutline /> Hoje Ya Henda / Luanda
            </p>
            <p>
              {" "}
              <MdOutlineMail /> jorgepedro@gmail.com
            </p>
            <p>
              {" "}
              <IoCallOutline /> 935-555-500
            </p>
            <p>
              {" "}
              <CiClock1 />
              24/24
            </p>
            <div className={style.contacts_container_body_1_socials}>
              <FaFacebookF />
              <FaTwitter />
              <AiFillInstagram />
            </div>
          </div>

          <div className={style.contacts_container_body_2}>
            <h1>Entrar em contacto</h1>
            <p>t is a long established fact that a reader will </p>
            <form className={style.contacts_container_body_2_form}>
              <div
                className={style.contacts_container_body_2_form_input_container}
              >
                {" "}
                <IoPersonOutline />
                <input type="text" placeholder="Name" />
              </div>
              <div
                className={style.contacts_container_body_2_form_input_container}
              >
                {" "}
                <MdAlternateEmail />
                <input type="text" placeholder="Input your Email" />
              </div>
              <div
                className={
                  style.contacts_container_body_2_form_text_areia_container
                }
              >
                <FaRegMessage />
                <textarea type="text" placeholder="Input your Mensage" />
              </div>

              <button>
                Enviar <LuSendHorizonal />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
