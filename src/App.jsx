import "./App.css";
import About from "./Components/About";
import { Center } from "./Components/container";
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
    </>
  );
}

export default App;
