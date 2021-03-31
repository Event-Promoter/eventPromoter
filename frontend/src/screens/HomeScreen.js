import React from "react";
import Banner from "../components/Banner/Banner";
import Random from "../components/random/random";
import EventCard from "../components/EventCard/EventCard";
import "./HomeScreen.css";
// import ImgMediaCard from '../components/Card'
function HomeScreen() {
  return (
    <div className="homeScreen">
      <Banner />
      <Random />
      <EventCard />
    </div>
  );
}

export default HomeScreen;
