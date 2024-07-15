import suports from "../../../model/support";
import style from "./Support.module.css";

function Support() {
  return (
    <div className={style.support_container}>
     <div className="container">
     <div className={style.support_container_body}>
        {suports.map((src, index) => (
          <img key={index} src={src} alt={`Support ${index}`} />
        ))}
      </div>
     </div>
    </div>
  );
}

export default Support;
