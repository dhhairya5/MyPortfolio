import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";


export default function App() {

  useEffect(() => { 
    // Register ScrollTrigger Plugin

    gsap.registerPlugin(ScrollTrigger)

    // Refresh ScrollTrigger when the page is fully Loaded 

    ScrollTrigger.refresh()

    // Clean up ScrollTrigger on componenet unmount 

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  },[])

  return (
    <>
    <Header />
    <HeroSection />
    <CustomCursor />
    <AboutSection />
    < ProjectsSection />
    <ContactSection />
    <Footer />
    <ProgressBar />
    </>
    
  )
}

// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Routes, Route } from "react-router-dom";

// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import CustomCursor from "./components/CustomCursor";
// import AboutSection from "./components/AboutSection";
// import ProjectsSection from "./components/ProjectsSection";
// import ContactSection from "./components/ContactSection";
// import Footer from "./components/Footer";
// import ProgressBar from "./components/ProgressBar";
// import PrivacyPolicy from "./components/PrivacyPolicy";
// import TermsOfService from "./components/TermsOfService";
// import CookiePolicy from "./components/CookiePolicy";

// export default function App() {
//   useEffect(() => { 
//     gsap.registerPlugin(ScrollTrigger);
//     ScrollTrigger.refresh();
//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <>
//       <Header />
//       <CustomCursor />
//       <Routes>
//         {/* Home Page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <HeroSection />
//               <AboutSection />
//               <ProjectsSection />
//               <ContactSection />
//               <Footer />
//               <ProgressBar />
//             </>
//           }
//         />

//         {/* Standalone Pages */}
//                 <Route
//           path="/privacy-policy"
//           element={
//             <>
//               <PrivacyPolicy />
//               <Footer />
//               <ProgressBar />
//             </>
//           }
//         />
//         <Route
//           path="/terms-of-service"
//           element={
//             <>
//               <TermsOfService />
//               <Footer />
//               <ProgressBar />
//             </>
//           }
//         />
//         <Route
//           path="/cookie-policy"
//           element={
//             <>
//               <CookiePolicy />
//               <Footer />
//               <ProgressBar />
//             </>
//           }
//         />
//       </Routes>
//     </>
//   );
// }

