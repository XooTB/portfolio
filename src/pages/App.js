import '../styles/App.css';
import NavBar from '../containers/NavBar';
import Hero from '../containers/Hero';
import About from '../containers/About';
import Projects from '../containers/Projects'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About /> 
      <Projects /> 
    </div>
  );
}

export default App;
