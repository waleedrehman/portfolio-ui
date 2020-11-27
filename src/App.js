import './App.css';
import './css/bootstrap.css';
import './css/ionicons.css';
import './css/fluidbox.min.css';
import './css/styles.css';
import './css/responsive.css';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import AboutSection from './components/AboutSection';
import './common-js/jquery-3.2.1.min.js';
import './common-js/tether.min.js';
import './common-js/bootstrap.js';
import './common-js/isotope.pkgd.min.js';
import './common-js/jquery.waypoints.min.js';
import './common-js/progressbar.min.js';
import './common-js/jquery.fluidbox.min.js';
import './common-js/scripts.js';
import './common-js/init.js';




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
