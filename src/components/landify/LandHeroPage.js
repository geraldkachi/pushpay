import React from "react";
import LandNav from "./LandNav";
import LandHero from "./LandHero";
import LandTailor from "./LandTailor";
import LandStory from "./LandStory";

const LandHeroPage = () => {
  return (
    <>
      <div className="">
        <div className="min-vh-100">
          <LandNav />
          <LandHero />
        </div>
      </div>
      <LandTailor className="min-vh-100 mx-auto" />
      <LandStory className="min-vh-100 mx-auto" />

    </>
  );
};

export default LandHeroPage;
