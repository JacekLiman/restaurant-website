import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

import About from "./component/About";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Menu from "./component/Menu";
import Reservation from "./component/Reservation";
import Team from "./component/Team";
import Testimonial from "./component/Testimonial";

function App() {
  useEffect(() => {
    Aos.init({
      offset: 400,
      duration: 1000,
    });
  }, []);

  return (
    <div className="max-w-[1800px] mx-auto overflow-hidden">
      <Header />
      <Hero />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Reservation />
      <Footer />
    </div>
  );
}

export default App;
