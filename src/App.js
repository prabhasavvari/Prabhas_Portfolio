import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/cardProject.scss';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
