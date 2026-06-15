import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Research from "./sections/Research";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Research />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;