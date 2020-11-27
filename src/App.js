import './App.css';
import './css/bootstrap.css';
import './css/ionicons.css';
import './css/fluidbox.min.css';
import './css/styles.css';
import './css/responsive.css';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';




function App() {
  return (
    [
      <Header></Header>,
      <IntroSection></IntroSection>,
      <AboutSection></AboutSection>
    ]
  );
}

export default App;
