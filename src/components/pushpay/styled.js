import styled from "styled-components";

export const SideStyle = styled.div`
  .links {
    text-decoration: none;
    display: flex;
    align-items: center;
    font-weight: 500px;
    padding: 8px 5px;
    color: #56799d;
    &:hover {
      color: white;
      background: #2335ed;
      border-radius: 10px;
    }
    span {
      margin-left: 5px;
    }
  }
`;

export const PowerRad = styled.span`
  color: #0000ff;
  // top: 90%;
  // left: 40%;

  @media screen and (max-width: 800px) {
    text-align: center;
}
`;

export const BackRad = styled.div`
  background: #f2f2f2;
  border-radius: 50px;
  // min-height: 400px;
`;

export const MainRou = styled.div`
  background: "#FFFFFF";
  height: auto;
  border-radius: 20px;
  // min-height: 300px;
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
  flex-basis: 100%;
`