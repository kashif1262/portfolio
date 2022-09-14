import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Portpolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/Testimonial/Testimonial";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portpolio />
      <Testimonial />
    </div>
  );
}

export default App;
