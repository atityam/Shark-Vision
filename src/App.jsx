import Header from "./components/Header.jsx";
import CustomCarousel from "./components/CustomCarousel.jsx";
import AssistanceSection from "./components/AssistanceSection.jsx";
// import Home from "./components/Home.jsx";
// import AnimatedCounters from "./components/AnimatedCounters.jsx";
// import ReasonsSection from "./components/ReasonsSection.jsx";
import InsuranceLanding from "./components/InsuranceLanding.jsx";
import Footer from "./components/footer.jsx";
import './App.css';


function App() {
  return (
    <>
      <Header />
      <CustomCarousel/>
      <AssistanceSection/>
      {/* <Home /> */}
      {/* <AnimatedCounters/> */}
      {/* <Cards /> */}
      <InsuranceLanding/>
      {/* <ReasonsSection/> */}
      <Footer />
    </>
  );
}

export default App;

//  <Router basename='/'>
//      <Routes>
//       <Route path="/" element={ < LandingPage/>} />

//     </Routes>
// </Router>
