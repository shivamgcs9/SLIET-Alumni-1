import { useState, useEffect } from "react";
import { Navigation } from "./components/Home/navigation";
import { Header } from "./components/Home/header";
import { Features } from "./components/Home/features";
import { About } from "./components/Home/about";
// import { Services } from "./components/Home/services";
import { Gallery } from "./components/Home/gallery";
import { Testimonials } from "./components/Home/testimonials";
import { Team } from "./components/Home/Team";
import { Contact } from "./components/Home/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      {/* <Services data={landingPageData.Services} /> */}
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />

    {/* <Router>
      <Switch>
        <Route path='/teams' component={Teams} />
      </Switch>
    </Router>
       */}
    </div>
  );
};

export default App;
