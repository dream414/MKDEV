import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact"; // ✅ missing tha
import ToolsPanel from "./components/tool";
import "./App.css";
import Footer from "./components/Footer";
import ProjectsSection from "./components/ProjectsSection";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Home />
    <About/>
        <Services />
        <ProjectsSection />
      <ToolsPanel/>
        <Contact /> 
        <Footer/>
      </main>
    </>
  );
}

export default App;
