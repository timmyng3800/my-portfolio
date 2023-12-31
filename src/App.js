import "./App.css";
import { BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import MyExperience from "./Components/MyExperience";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <About />
        <Skills />
        <Portfolio/>
        <MyExperience />
        <Contact/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
