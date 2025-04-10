import Header from "./components/sections/header/Header";
import Hero from "./components/sections/hero/Hero";
import About from "./components/sections/about/About";
import Skills from "./components/sections/skills/Skills";
import Projects from "./components/sections/projects/Projects";
import Footer from "./components/sections/footer/Footer";
import To_top from "./components/Return_to_top";

function App() {
  return (
    <>
      <To_top/>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;