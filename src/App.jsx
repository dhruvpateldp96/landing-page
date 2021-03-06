import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Offerings } from "./components/offerings";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Pricing } from "./components/pricing";
import { ComponentsEnum, renderMap } from "./utils";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isStudent, setIsStudent] = useState(true);
  const [activeComponent, setActiveComponent] = useState(
    [ComponentsEnum.InstituteComponent]
  )
  const changeState = (component) => (
    setActiveComponent(component)
  )

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {renderMap({ landingPageData, changeState })[activeComponent]}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
