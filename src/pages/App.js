import '../styles/App.css';
import NavBar from '../containers/NavBar';
import Hero from '../containers/Hero';
import About from '../containers/About';
import Projects from '../containers/projects/Projects';
import Tech from '../containers/tech/Tech.container';
import HomeContact from '../containers/homeContact/homeContact.component';
import Footer from '../containers/Footer/Footer.container';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Tech />
      <HomeContact />
      <Footer />
    </div>
  );
}

export default App;
