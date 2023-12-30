import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Toolbox from "./components/toolbox";

export default function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div id = "content-container">
        <About></About>
        <Projects></Projects>
        <Toolbox></Toolbox>
      </div>
    </div>
  )

}

