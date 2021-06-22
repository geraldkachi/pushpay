import styled from "styled-components";
const Pay = styled.div`
  max-width: 100%;
  width: 40%;
  background: #F2F2F2;
  margin: 70px auto;
  padding: 1rem;
  border-radius: 10px;
  font-family: "Work Sans";
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100%;
  font-size: 14px;
  color: #56799D;
  .side {
    .header {
      line-height: 0.5;
      img {
        max-width: 100%;
        width: 90px;
      }
    }
    ul {
      padding-left: 0;
      li {
        list-style: none;
        align-items: center;
        li:hover {
          color: white;
        }
        .links {
          text-decoration: none;
          display: flex;
          align-items: center;
          font-weight: 500px;
          padding: 8px 5px;
          color: #56799D;
          &:hover {
            color: white;
            background: #2335ED;
            border-radius: 10px;
          }
          span {
            margin-left: 5px;
          }
        }
      }
    }
    .sidebars {
      background-color: white;
      text-align: center;
      padding: 1px 0;
      font-size: 12px;
      border-radius: 10px;
    }
  }
  .main {
    background-color: white;
    border-radius: 20px;
    width: 30%;
    min-height: 100%;
    flex: 1.5;
    margin-left: 18px;
  }
`;
export default Pay;