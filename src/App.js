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
      <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600,700%7CAllura" rel="stylesheet"></link>,
      <Header></Header>,
      <IntroSection></IntroSection>,
      <AboutSection></AboutSection>,
      <script src="./common-js/jquery-3.2.1.min.js"></script>,
      <script src="./common-js/tether.min.js"></script>,
      <script src="./common-js/bootstrap.js"></script>,
      <script src="./common-js/isotope.pkgd.min.js"></script>,
      <script src="./common-js/jquery.waypoints.min.js"></script>,
      <script src="./common-js/progressbar.min.js"></script>,
      <script src="./common-js/jquery.fluidbox.min.js"></script>,
      <script src="./common-js/scripts.js"></script>,
      <script src="./common-js/init.js"></script>,
    ]
  );
}

export default App;
