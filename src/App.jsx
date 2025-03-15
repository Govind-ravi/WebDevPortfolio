import "./App.css";
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ToolsSection from "./components/ToolsSection";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <AboutSection />
      <ToolsSection />
    </div>
  );
}

export default App;
