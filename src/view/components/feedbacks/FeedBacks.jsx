import FeedBack_Card from "../feedbackcard/FeedBack_Card";
import style from "./FeedBacks.module.css";
import feedbacks from "../../../model/feedback";

function FeedBacks() {
  return (
    <div className={style.feedbacks_container}>
      <h1>FeedBacks dos Usuários</h1>
     <div className="container">
     <div className={style.feedbacks_list}>
        {feedbacks.map((feedback, index) => (
          <FeedBack_Card
            key={index}
            username={feedback.username}
            address={feedback.address}
            message={feedback.message}
            imageurl={feedback.imageurl} // Corrigido para 'imageurl'
          />
        ))}
      </div>
     </div>
    </div>
  );
}

export default FeedBacks;
