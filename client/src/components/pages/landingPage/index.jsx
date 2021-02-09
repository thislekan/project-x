import HomeTopNav from "../../molecules/navBar/homeNav";
import LandingTemplate from "../../templates/landingTemplate";

const App = () => (
  <div className="landing">
    <HomeTopNav />
    <div className="landing__wrapper">
      <LandingTemplate />
    </div>
  </div>
);

export default App;
