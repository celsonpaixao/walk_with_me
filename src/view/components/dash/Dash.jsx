import style from "./Dash.module.css";
import dashdata from "../../../model/dash";
import Dash_Card from "../dashcard/Dash_Card";

function Dash() {
  return (
    <div className={style.dash_container}>
      <div className="container">
        <div className={style.dash_container_body}>
          <div className={style.dash_container_body_1}>
            <img src="src/assets/render_2.png" alt="renderdash" />
          </div>
          <div className={style.dash_container_body_2}>
            {dashdata.map((data, index) => (
              <Dash_Card
                key={index}
                title={data.title}
                value={data.value + "%"}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
