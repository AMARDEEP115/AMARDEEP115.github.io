import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
// import GitStats from './Components/GitStats/GitStats';
// import Projects from './Components/Projects/Projects';
// import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      {/* <Skills />
      <Projects />
      <GitStats /> */}
      <Contact />
    </div>
  );
}

export default App;
