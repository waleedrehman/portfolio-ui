import './App.css';
import './css/bootstrap.css';
import './css/ionicons.css';
import './css/styles.css';
import './css/responsive.css';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    [
      <Header key="Header" />,
      <IntroSection key="IntroSection" />,
      <AboutSection key="AboutSection" />,
      <ExperienceSection key="ExperienceSection" />,
      <EducationSection key="EducationSection" />,
      <ContactSection key="ContactSection" />,
      <Footer key="Footer" />
    ]
  );
}

export default App;
