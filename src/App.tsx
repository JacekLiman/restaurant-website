import About from "./component/About";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Menu from "./component/Menu";
import Team from "./component/Team";

function App() {
  return (
    <div className="max-w-[1800px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Team />
    </div>
  );
}

export default App;
