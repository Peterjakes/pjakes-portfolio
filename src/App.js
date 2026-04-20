import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css'; // global styles

function App() {
  return (
    // Wrapper div — bg-black ensures no white flash between sections
    <div className="min-h-screen bg-black">

      {/* Navbar — fixed at top, overlays all sections */}
      <Navbar />
      <Hero />       
      <About />      
      <TechStack />  
      <Portfolio />  
      <Contact />    

    </div>
  );
}

export default App;