import React from "react";

const LandTailorFeat = ({ data }) => {
  const Featstyle = {
    display: "grid",
    gripTempColumns: "repeat(3, 1fr)",
    gridGap: "1rem",
  };

  return (
    <div className="text-center my-5 row">
      {data.map((item, index) => {
        const { title, svg, subtitle } = item;
        return (
          <div key={index} style={Featstyle} className="text-center container">
            <img className="text-center my2" src={svg} alt="" />
            <div className="text-center my2">{title}</div>
            <div className="text-center my2">{subtitle}</div>
          </div>
        );
      })}
    </div>
  );
};

export default LandTailorFeat;
