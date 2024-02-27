import About from "./component/About";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Menu from "./component/Menu";

function App() {
  return (
    <div className="max-w-[1800px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Menu />
      
    </div>
  );
}

export default App;
