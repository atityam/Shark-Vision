import Header from "./components/Header.jsx";
import CustomCarousel from "./components/CustomCarousel.jsx";
import AssistanceSection from "./components/AssistanceSection.jsx";
import StatsSection from "./components/StatsSection.jsx";
import Features from "./components/Features.jsx";
import Services from "./components/Services.jsx";
import Contact from "./components/Contact.jsx";
import TeamSection from "./components/TeamSection.jsx";
import Feedback from "./components/Feedback.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import './App.css';



function App() {
  return (
    <>
      <Header />
      <CustomCarousel/>
      <AssistanceSection/>
      <StatsSection/>
      <Features/>
      <Services/>
      <Contact/>
      <TeamSection/>
      <Feedback/>
      <Footer />
      <ScrollToTop/>
    </>
  );
}

export default App;

//  <Router basename='/'>
//      <Routes>
//       <Route path="/" element={ < LandingPage/>} />

//     </Routes>
// </Router>
