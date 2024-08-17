import "./App.css";
import About from "./Components/About";
import Cta from "./Components/Cta";
import Graph from "./Components/interface/Grid";
import Cursor from "./Components/interface/Mouse";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Projects/>
      <Cta/>
      <Cursor/>
    </>
  );
}

export default App;
