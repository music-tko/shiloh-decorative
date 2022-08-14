import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Header from "./layout/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Services />
    </div>
  );
}

export default App;
