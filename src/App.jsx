import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Technologies from './Components/Technologies';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Loading from './Components/Loading'; // Import the Loading component

const App = () => {
  // State to track when loading is done
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer for the loading animation (e.g., 4 seconds)
    const timer = setTimeout(() => {
      setLoading(false); // After 4 seconds, stop loading
    }, 2000); // Change this duration if you need a different length for loading

    return () => clearTimeout(timer); // Clear timer on unmount
  }, []);

  return (
    <>
      {loading ? (
        // Render Loading screen when loading is true
        <Loading />
      ) : (
        // Render the main content when loading is false
        <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative top-0 left-0 z-0 w-full min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          {/* Global background */}
          <div className="fixed top-0 left-0 z-[-1] w-full min-h-screen"></div>
          {/* Main container */}
          <div className="container px-5 md:m-auto">
            <Navbar />
            <Hero />
            <About />
            <Technologies />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default App;
