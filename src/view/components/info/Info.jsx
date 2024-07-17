import Info_Accordion from "../info_accordion/Info_accordion";
import style from "./Info.module.css";
import informations from "../../../model/info";

function Info() {
  return (
    <div className={style.info_container}>
      <div className="container">
        <div className={style.info_container_body}>
          <div className={style.info_container_body_1}>
            <img src="src/assets/mockup_1.png" alt="mockup1" />
          </div>

          <div className={style.info_container_body_2}>
            <h1>
              Learn how the platform works and achieve your goal of making money
            </h1>

            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
            <div>
              {informations.map((info, index) => (
                <Info_Accordion
                  key={index}
                  title={info.title}
                  description={info.description} // Corrigido para 'description'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
