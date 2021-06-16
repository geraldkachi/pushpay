import React from "react";

import { ReactComponent as Airbnb } from "../../assest/images/AirbnbLogo.svg";
import { ReactComponent as Hubspot } from "../../assest/images/HubspotLogo.svg";
import { ReactComponent as Microsoft } from "../../assest/images/MicrosoftLogo.svg";
import { ReactComponent as Walmart } from "../../assest/images/WalmartLogo.svg";
import { ReactComponent as Google } from "../../assest/images/GoogleLogo.svg";
import { ReactComponent as FedEx } from "../../assest/images/FedExLogo.svg";

import { Container, Row, Col } from "reactstrap";

const LandCom = () => {
  return (
    <>
      <hr className="w-75" />
      <Container className="container text-center mx-auto my-5">
        <Row>
          <Col>
            <Airbnb className=" my-3" />
          </Col>
          <Col>
            <Hubspot className=" mx-2 my-3" />
          </Col>
          <Col><Google className=" mx-2 my-3"  /></Col>
          <Col>
            <Microsoft className=" mx-2 my-3" />
          </Col>
          <Col>
            <Walmart className=" mx-2 my-3" />
          </Col>
          <Col>
            <FedEx className=" mx-2 my-3" />
          </Col>
        </Row>
      </Container>
      <hr className="w-75" />
    </>
  );
};

export default LandCom;
