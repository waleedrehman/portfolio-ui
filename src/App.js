import './App.css';
import './css/bootstrap.css';
import './css/ionicons.css';
import './css/fluidbox.min.css';
import './css/styles.css';
import './css/responsive.css';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    [
      <Header />,
      <IntroSection />,
      <AboutSection />,
      <ExperienceSection />,
      <EducationSection />,
      <ContactSection />
    ]
  );
}

export default App;
