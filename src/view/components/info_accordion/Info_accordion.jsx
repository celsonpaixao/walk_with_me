import { useState } from "react";
import style from "./Info_Accordion.module.css";
import PropTypes from "prop-types";

function Info_Accordion({ title, description }) {
  const [buttonlabo, setButtonlabo] = useState(false);

  return (
    <div className={style.accordion_container}>
      <div
        className={
          buttonlabo
            ? style.accordion_container_title
            : style.accordion_container_title_off
        }
      >
        <h1>{title}</h1>
        <button
          onClick={() => {
            setButtonlabo(!buttonlabo);
          }}
        >
          {buttonlabo ? "-" : "+"}
        </button>
      </div>
      <div
        className={
          buttonlabo
            ? style.accordion_container_description
            : `${style.accordion_container_description} ${style.accordion_container_description_off}`
        }
      >
        <p>{description}</p>
      </div>
    </div>
  );
}

Info_Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Info_Accordion;
