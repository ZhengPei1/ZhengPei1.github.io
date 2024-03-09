import Navbar from "./sections/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import Projects from "./sections/projects";
import Contact from "./sections/contact";
import Footer from "./sections/footer";


export default function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div id = "content-container">
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  )

}

