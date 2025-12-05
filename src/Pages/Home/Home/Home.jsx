import React from "react";
import Banner from "../Banner/Banner";
import HowItWork from "../HowItWork/HowItWork";
import Services from "../Services/Services";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import SupportCenter from "../SupportCenter/SupportCenter";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWork></HowItWork>
      <Services></Services>
      <Brands></Brands>
      <SupportCenter></SupportCenter>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
