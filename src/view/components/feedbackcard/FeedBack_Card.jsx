import PropTypes from "prop-types";
import style from "./FeedBack_Card.module.css";
import { RiDoubleQuotesR } from "react-icons/ri";

function FeedBack_Card({ username, address, message, imageurl }) {
  return (
    <div className={style.card_container}>
      <div className={style.speech_bubble}>
        <h1>
          {" "}
          <RiDoubleQuotesR />
        </h1>
        <p>{message}</p>
      </div>

      <div className={style.container_button}>
        <img src={imageurl} alt="user" />
        <div className={style.container_button_hero}>
          <p className={style.container_button_hero_username}>{username}</p>
          <p className={style.container_button_hero_address}>{address}</p>
        </div>
      </div>
    </div>
  );

  FeedBack_Card.PropTypes = {
    username: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    imageurl: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };
}
export default FeedBack_Card;
