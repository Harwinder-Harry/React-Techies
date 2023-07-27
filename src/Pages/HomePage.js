import "bootstrap/dist/css/bootstrap.min.css";
import TopHead from "../Components/Home/TopHead";
import Banner from "../Components/Home/Banner";
import OurRelation from "../Components/Home/OurRelation";
import OurCaseStudy from "../Components/Home/OurCaseStudy";
import Youbest from "../Components/Home/Youbest";
import ServiceConsultant from "../Components/Home/ServiceConsultant";
import CutomRate from "../Components/Home/CutomRate";
import Industries from "../Components/Home/Industries";
import Forever21 from "../Components/Home/Forever21";
import LifeTechies from "../Components/Home/LifeTechies";
import Feedback from "../Components/Home/Feedback";
import Discuss from "../Components/Home/Discuss";
import FooterSocial from "../Components/Home/FooterSocial";
import Footer from "../Components/Home/Footer";
import Copyright from "../Components/Home/Copyright";

function HomePage() {
  return (
    <div>
      <TopHead />
      <Banner />
      <OurRelation />
      <OurCaseStudy />
      <Youbest />
      <ServiceConsultant />
      <CutomRate />
      <Industries />
      <Forever21 />
      <LifeTechies />
      <Feedback />
      <Discuss />
      <FooterSocial />
      <Footer />
      <Copyright />
    </div>
  );
}

export default HomePage;
