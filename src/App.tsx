import Header from "./component/Header";
import Hero from "./component/Hero";

function App() {
  return (
    <div className="max-w-[1800px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <div className="h-[1000px]"></div>
    </div>
  );
}

export default App;
