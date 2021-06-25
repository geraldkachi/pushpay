import styled from "styled-components";
import { NavLink } from "react-router-dom"

export const LinkStled = styled(NavLink)`

  a{
    text-decoration: none;
  }
    li {
      list-style: none;
      align-items: center;
      li:hover {
        color: white;
        background: #2335ed;
        border-radius: 10px;
      }
    }

  &:active {
    background: #2335ed;
    border-radius: 10px;
    color: white;
  }
  .active {
    background: #2335ed;
    border-radius: 10px;
    color: white;
  }
  &:hover {
    color: white;
    text-decoration: none;
    background: #2335ed;
    border-radius: 10px;
  }
`;

export const PowerRad = styled.span`
  color: #0000ff;
  text-align: center;
  font-size: 10px;
  font-family: "Work Sans";
  // position: absolute;
  top: 80%;
  left: 45%;
  margin: auto;
  display: block;

  @media screen and (max-width: 600px) {
    text-align: center;
    display: block;
    z-index: 999px;
    margin-top: 80px;
  }
`;

// const activePath = window.location.pathname

export const BackRad = styled.div`
  background: #f2f2f2;
  border-radius: 50px;
  // min-height: 400px;

  @media screen and (max-width: 596px) {
    background: #fff;
  }
`;

export const MainRou = styled.div`
  background: #ffffff;
  // height: auto;
  border-radius: 20px;
  min-height: 375px;

  .currentroute {
    &:hover {
      color: white;
      // background: #2335ed;
      background: #2335ed;
      border-radius: 10px;
    }
    &:isactive {
      background: #2335ed;
    }
  }

  @media screen and (max-width: 770px) {
    min-height: unset;
  }
`;

export const ListSTyle = styled.li`
  color: #56799d;
  text-decoration: none;


  // background: #2335ED,
  // width:  "239px",
  // border:"none",
  // borderRadius: "14px",
  // width: "30px",
  // overflow: "hidden",
  // padding: ".5rem",
  // alignItems: "center",
  // borderRadius: "10px",
  // textDecoration: "none",
  &:hover {
    background: #2335ED,
    color: "white;
  }
`;
export const PaymentLay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // flex-basis: 100%;

  @media screen and (max-width: 600px) {
    margin-top: 25px;
    margin-bottom: 25px;
    height: auto;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
