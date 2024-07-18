import Contacts from "../components/contacts/Contacts";
import Dash from "../components/dash/Dash";
import FeedBacks from "../components/feedbacks/FeedBacks";
import Header from "../components/header/Header";
import Info from "../components/info/Info";
import OurServices from "../components/ourservices/OurServices";
import Service from "../components/service/Service";
import Support from "../components/support/Support";

function Home() {
  return (
    <div>
      <Header />
      <Support />
      <Service />
      <Info />
      <Dash />
      <OurServices />
      <FeedBacks />
      <Contacts />
    </div>
  );
}

export default Home;
