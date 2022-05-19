import '../styles/App.css';
import NavBar from '../containers/NavBar';
import Hero from '../containers/Hero';
import About from '../containers/About';
import Projects from '../containers/projects/Projects';
import Tech from '../containers/tech/Tech.container';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Tech />
    </div>
  );
}

export default App;
