import React from "react";
import { Card } from "reactstrap";
import { ReactComponent as LogoHero } from "../../assest/images/Phone.svg";

const btnColor = {
  backgroundColor: "#8C30F5",
  borderRadius: "8px",
  fontSize: "20px",
  width:"196px",
  height:'62px',
  // fontFamily: 'Manrope',
  marginTop: "32px",
  marginBottom: "32px",
};
const LandHero = () => {
  return (
    <>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-md-7" style={{ backgroundColor: "white" }}>
                <div className="justify-content-center align-items-center my-5">
                  <h1
                    className="display-4"
                    style={{
                      // fontWeight: 800,
                      fontSize: "70px",
                      // lineHeight: "98px",
                      color:'#18191F',
                      // fontFamily: "",
                      backgroundColor:"white",
                    }}
                    className="pr-5"
                  >
                    Organise projects. Get more done.
                  </h1>
                <button className="btn rounded text-white my-2" style={btnColor}>
                  Get Started
                </button>
                </div>
          </div>
            <div class="col-md-5 text-right">
              <LogoHero style={{ height: "590px"}} />
            </div>
        </div>
      </div>
    </>
  );
};

export default LandHero;
