// import Header from "./components/Header.jsx";
// import CustomCarousel from "./components/CustomCarousel.jsx";
// import AssistanceSection from "./components/AssistanceSection.jsx";
// import StatsSection from "./components/StatsSection.jsx";
// import Features from "./components/Features.jsx";
// import Services from "./components/Services.jsx";
// import Contact from "./components/Contact.jsx";
// import TeamSection from "./components/TeamSection.jsx";
// import Feedback from "./components/Feedback.jsx";
// import Footer from "./components/Footer.jsx";
// import ScrollToTop from "./components/ScrollToTop.jsx";
// import ContactHeader from "./components/ContactHeader.jsx";
// import AboutHeader from "./components/AboutHeader.jsx";
// import ServicesHeader from "./components/ServicesHeader.jsx";
// import MapContactSection from "./components/MapContactSection.jsx";
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.jsx";
import { AboutPage } from "./Pages/AboutPage.jsx";
import { ServicesPage } from "./Pages/ServicesPage.jsx";
import { ContactPage } from "./Pages/ContactPage.jsx";
import AppLayout from "./components/AppLayout.jsx";
import FeaturesPage from './Pages/FeaturesPage';
import AppointmentPage from './Pages/AppointmentPage';
import TestimonialPage from "./Pages/TestimonialPage.jsx";
import TeamMemberpage from "./Pages/TeamMemberpage.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import FaceRecognitionSystem from './Pages/FaceRecognitionSystem';
import FRS from './Pages/FRS';
import InsuranceClaim from './Pages/InsuranceClaim';
import Attendance from './Pages/Attendance.jsx';
import CabBookPage from './Pages/CabBookPage';

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <HomePage />,
                },
                {
                    path: "/about",
                    element: <AboutPage />,
                },
                {
                    path: "/services",
                    element: <ServicesPage />,
                },
                {
                    path: "/contact",
                    element: <ContactPage />,
                },
                {
                    path: "/features",
                    element: <FeaturesPage />,
                },
                {
                    path: "/appointment",
                    element: <AppointmentPage />,
                },
                {
                    path: "/testimonial",
                    element: <TestimonialPage />,
                },
                {
                    path: "/team",
                    element: <TeamMemberpage />,
                },
                {
                    path: "/*",
                    element: <ErrorPage />,
                },
                {
                    path: "/facerecognitionsystem",
                    element: <FaceRecognitionSystem/>,
                },
                {
                    path: "/FRS",
                    element: <FRS/>,
                },
                {
                    path: "/insuranceclaim",
                    element: <InsuranceClaim/>,
                },
                {
                    path: "/attendance",
                    element: <Attendance/> ,
                },
                {
                    path: "/cabbooking",
                    element: <CabBookPage/>,
                },

            ],
        },

    ]);
    return <RouterProvider router={router} />;

    // return (
    //   <>
    //     <Header />
    //     <AboutHeader/>
    //     <ServicesHeader/>
    //     <ContactHeader/>
    //     <MapContactSection/>
    //     <CustomCarousel/>
    //     <AssistanceSection/>
    //     <StatsSection/>
    //     <Features/>
    //     <Services/>
    //     <Contact/>
    //     <TeamSection/>
    //     <Feedback/>
    //     <Footer />
    //     <ScrollToTop/>
    //   </>
    // );
    //  <Router basename='/'>
    //      <Routes>
    //       <Route path="/" element={ < LandingPage/>} />

    //     </Routes>
    // </Router>
}
export default App;
