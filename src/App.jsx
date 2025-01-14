import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Education from "./pages/Education.jsx";
import Contact from "./pages/Contact.jsx";



import './styles/index.css'



const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
// export default function App() {
//   return (
//     <>
//       <div className='flex flex-col bg-[#09090b]'>
//         <section className='mb-8'>
//           <Landing />

//         </section>
//         <section className="h-screen p-4 flex space-x-8">

//           <Map />
//           <SpotifyDisplay />
//           <MonkeyTypeDisplay />
//         </section>
//       </div>
//     </>
//   );
// }