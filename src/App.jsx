import Header from "./components/header.jsx";
import Home from "./components/Home.jsx";
import Testimonial from "./components/Cards.jsx";
import Footer from "./components/footer.jsx";
import './App.css';


function App() {
  return (
    <>
      <Header />
      <Home />
      <Testimonial />
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
