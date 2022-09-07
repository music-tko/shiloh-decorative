import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Photos from "./components/Photos";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Photos />
      <Contact />
    </div>
  );
}

export default App;
