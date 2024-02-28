import About from "./component/About";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Menu from "./component/Menu";
import Team from "./component/Team";
import Testimonial from "./component/Testimonial";

function App() {
  return (
    <div className="max-w-[1800px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial/>
    </div>
  );
}

export default App;
