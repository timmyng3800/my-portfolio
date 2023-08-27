import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import MyExperience from "./Components/MyExperience";
import NavBar from "./Components/NavBar";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        {/* <div>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/skills" component={Skills} />
            <Route path="/myexperiences" Component={MyExperience} />
          </Switch>
        </div> */}
        <About />
        <Skills />
        <MyExperience />
        <Contact/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
