import '../styles/App.css';
import NavBar from '../containers/NavBar';
import Hero from '../containers/Hero';
import About from '../containers/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About /> 
    </div>
  );
}

export default App;
