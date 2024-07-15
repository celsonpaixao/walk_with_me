import services from "../../../model/services";
import ServiceCard from "../servicecard/ServiceCard";
import style from "./Service.module.css";

function Service() {
  return (
    <div className={style.service_container}>
      <h1>our Services</h1>
      <div className="container">
        <div className={style.services_cards_body}>
          {services.map((service, index) => (
            <ServiceCard
              key={index} // Adicione uma chave única para cada item
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
