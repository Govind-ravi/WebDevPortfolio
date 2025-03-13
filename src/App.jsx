import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <div className="h-screen bg-gradient-to-t from-[#0E1414] via-[#0E1414] via-90% to-transparent z-1 "></div>

      <div className="fixed top-[70%] left-[10%] w-48 h-48 rounded-full bg-primary/10 blur-[80px]"></div>
      <div className="fixed top-[10%] left-[60%] w-48 h-48 rounded-full bg-primary/10 blur-[80px]"></div>
    </div>
  );
}

export default App;
