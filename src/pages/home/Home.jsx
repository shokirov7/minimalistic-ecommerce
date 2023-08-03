import React, { useEffect } from "react";
import Hero from "./hero/Hero";
import Proud from "./proud/Proud";
import Banner from "./banner/Banner";
import Banner2 from "./banner2/Banner2";
import "./Home.css";
import Slider from "../../components/slider/Slider";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="home">
      <Hero />
      <Proud />
      <Banner />
      <Slider />
      <Banner2 />
    </div>
  );
}

export default Home;
