import React from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";
import Support from "../Support/Support";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <Services></Services>
      <Brands></Brands>
      <Support></Support>
    </div>
  );
};

export default Home;
