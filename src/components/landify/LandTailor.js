import React from "react";
import LandCom from "./LandCom";
// import LandTailorFeat from "./LandTailorFeat";
import { ReactComponent as Roboust } from "../../assest/images/robust.svg";
import { ReactComponent as Flexibility } from "../../assest/images/flex.svg";
import { ReactComponent as User } from "../../assest/images/user.svg";
import { ReactComponent as Multiple } from "../../assest/images/multiple.svg";
import { ReactComponent as Better } from "../../assest/images/better.svg";
import { ReactComponent as Well } from "../../assest/images/well.svg";


// const data = [
//   {
//     svg: Roboust,
//     title: "Robust workflow",
//     subtitle:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
//   },
//   {
//     svg: Flexibility,
//     title: "Flexibility",
//     subtitle:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
//   },
//   {
//     svg: User,
//     title: "User friendly",
//     subtitle:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
//   },
//   {
//     svg: Multiple,
//     title: "Multiple layouts",
//     subtitle:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
//   },
//   {
//     svg: Better,
//     title: "Better components",
//     subtitle:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
//   },
//   {
//     svg: Well,
//     title: "Well organised",
//     subtitle:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
//   },
// ];


const LandTailor = () => {
  return (
    <>
      <LandCom />
      <div className="text-center">
        <h2 className="h2" style={{ fontSize: "48px" }}>
          Tailor-made features
        </h2>
        <div className="text-lead container mx-auto">
          Lorem ipsum is common placeholder text used to demonstrate the graphic
          elements of a document or visual presentation.
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="text-center container row my-3 mx-auto justify-content-center align-items-center">
        <div className="col-md-4 my-4">
        <Roboust className="my-2 " />
        <h5 className="my-2">Robust workflow</h5>
        <div
          style={{ fontSie: "16px", lineHeight: "26px", fontWeight: 400 }}
          className="my-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </div>
        </div>

        {/*  */}
        <div className="col-md-4 my-4">
        <Flexibility className="my-2 " />
        <h5 className="my-2">Robust workflow</h5>
        <div
          style={{ fontSie: "16px", lineHeight: "26px", fontWeight: 400 }}
          className="my-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </div>
        </div>
        {/*  */}
        <div className="col-md-4 my-4">
        <User className="my-2 " />
        <h5 className="my-2">Robust workflow</h5>
        <div
          style={{ fontSie: "16px", lineHeight: "26px", fontWeight: 400 }}
          className="my-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </div>
        </div>
        {/*  */}
        <div className="col-md-4 my-4">
        <Multiple className="my-2 " />
        <h5 className="my-2">Robust workflow</h5>
        <div
          style={{ fontSie: "16px", lineHeight: "26px", fontWeight: 400 }}
          className="my-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </div>
        </div>
        {/*  */}
        <div className="col-md-4 my-4">
        <Better className="my-2 " />
        <h5 className="my-2">Robust workflow</h5>
        <div
          style={{ fontSie: "16px", lineHeight: "26px", fontWeight: 400 }}
          className="my-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </div>
        </div>
        {/*  */}
        <div className="col-md-4 my-4">
        <Well className="my-2 " />
        <h5 className="my-2">Robust workflow</h5>
        <div
          style={{ fontSie: "16px", lineHeight: "26px", fontWeight: 400 }}
          className="my-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </div>
        </div>
        {/*  */}
      </div>
      {/* <LandTailorFeat data={data} /> */}
    </>
  );
};

export default LandTailor;
