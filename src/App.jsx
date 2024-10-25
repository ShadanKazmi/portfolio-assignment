import './App.css';
import AboutMe from './components/AboutMe';
import BottomBar from './components/BottomBar';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SkillSet from './components/SkillSet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="overflow-hidden">
      <>
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 pr-4 z-50">
          <a href="https://github.com/ShadanKazmi" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" className="text-white hover:text-yellow-300 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/shadan-kazmi/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-white hover:text-yellow-300 transition-colors duration-300" />
          </a>
          <a href="https://instagram.com/shadansk_30" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="text-white hover:text-yellow-300 transition-colors duration-300" />
          </a>
        </div>
        <NavBar />
        <HomePage />
        <AboutMe />
        <SkillSet />
        <Projects />
        <Contact />
        <BottomBar />
      </>
    </div>
  );
}

export default App;
