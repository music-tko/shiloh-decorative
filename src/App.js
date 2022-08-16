import About from "./components/About";
import Contact from "./components/Contact";
// import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Photos from "./components/Photos";
import Services from "./components/Services";
import Header from "./layout/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
      <Photos />
      <Contact />
    </div>
  );
}

export default App;
