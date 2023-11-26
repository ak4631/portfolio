import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/LandingPage/Home";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <header className="App-header">
            <Navbar />
          </header>
          <Home />
          <div className="main_content">
            <About />
            <Project />
            <Contact />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
