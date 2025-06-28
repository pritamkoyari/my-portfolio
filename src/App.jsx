
import styles from "./App.module.css";
import { About } from "./componentes/About/About";
import { Contact } from "./componentes/Contact/Contact";
import { Experience } from "./componentes/Experience/Experience";
import { Hero } from "./componentes/Hero/Hero";
import { Projects } from "./componentes/Projects/Projects";
import { Navbar } from './componentes/navbar/Navbar';
import { Footer } from "./componentes/Footer/Footer";

function App() {


  return (
    <>
    <div className={styles.App} >
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
