import PropTypes from 'prop-types';
import style from "./ServiceCard.module.css";
function ServiceCard({ icon, title, description }) {
  return (
    <div className={style.card_container}>
      <div>
        <img src={icon} alt={title} />
        <h2 className={style.tile}>{title}</h2>
      </div>
      <div>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  );
}

ServiceCard.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
