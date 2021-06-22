import React from "react";
import PaymentMethod from "./PaymentMethod";
// import { sections } from "./section"
import "./payment.css";

import { BackRad, PaymentLay } from "./styled"; //ListSTyle

const Payment = () => {
  // const sectionData = sections.length ? (
  //     section.map
  // ) : (
  //     <div>loading...</div>
  // )  d-flex justify-content-center align-items-center

  return (
    <>
      <PaymentLay className="backpay">
        <div style={{ width: "616px" }}>
          <BackRad className="p-4 overflow-hidden backrad">
            <PaymentMethod />
          </BackRad>
        </div>
      </PaymentLay>
    </>
  );
};

export default Payment;
