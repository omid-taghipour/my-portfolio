import "./App.css";
import NavBar from "./components/nav-bar/nav-bar";
import Home from "./components/home/home";
import AboutMe from "./components/about-me/about-me";
import Divider from "./components/divider/divider";
import Education from "./components/education/education";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";


function App() {
  const APP_VERSION  = "1.1";

  return (
    <div className="App" id="home">
      
      <NavBar />
      <Home />
      <Divider id='about-me' />
      <AboutMe />
      <Divider id="education" />
      <Education />
      <Divider id="skills" />
      <Skills />
      <Divider id="contact" />
      <Contact />
      {/* <Projects /> */}
      <Footer version={APP_VERSION} />
    </div>
  );
}

export default App;
