import PropTypes from "prop-types";
import style  from "./Dash_Card.module.css"
function Dash_Card({ title, value, description }) {
  return <div className={style.card_container}>
    <h2>{title}</h2>
    <h1>{value}</h1>
    <p>{description}</p>
  </div>;
}

Dash_Card.PropTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default Dash_Card;
