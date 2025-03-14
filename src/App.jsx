import "./App.css";
import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <AboutSection />
    </div>
  );
}

export default App;
