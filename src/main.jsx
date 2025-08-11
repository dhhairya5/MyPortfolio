// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import App from "./App";
// import AboutSection from "./components/AboutSection";
// import ProjectsSection from "./components/ProjectsSection";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/components/AboutSection" element={<AboutSection />} />
//         <Route path="/components/ProjectSection" element={<ProjectsSection />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);