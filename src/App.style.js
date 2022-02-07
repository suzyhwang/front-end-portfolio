import styled from "styled-components";

export const Header = styled.header`
  font-size: 1rem;
  color: white;
  top: 0;
  position: fixed;
  width: 100%;
  padding: 10px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #29282d;
  text-transform: uppercase;
  div {
    display: flex;
    max-width: 1260px;
    width: 100%;
    justify-content: flex-end;
    margin-right: 50px;
  }
  span {
    right: 0;
    margin-left: 10px;
    color: white;
  }
  span:hover {
    color: beige;
  }
`;

export const BodyContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 3.2rem;
  text-align: center;
  color: #6667ab;
  color: #7d6461;
  color: #29282d;
  padding: 15px;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
  padding-bottom: 30px;
  background-color: #f1ede9;
  max-width: 1260px;
  #intro_title {
    font-size: 1.75rem;
    margin-top: 10px;

    text-align: center;
    font-size: 1.5rem;

    width: fit-content;
    /* border-bottom: 2px solid black; */
  }
`;

export const ContentBox = styled.div`
  width: ${(props) => (props.width === "none" ? "" : "80%")};
  padding: ${(props) => (props.width === "none" ? "20px" : "")};
  margin: ${(props) => (props.width === "none" ? "20px" : "")};
  margin: ${(props) => (props.margin === "margin" ? "15px" : "")};
  padding: ${(props) => (props.margin === "margin" ? "30px" : "")};
  height: ${(props) => (props.width === "none" ? "fit-content" : "")};
  background-color: white;
  border: 2px solid black;
  box-shadow: #aca69f 6px 6px;
  text-align: center;
  #skill_img {
    width: 250px;
    padding: 30px 15px;
  }
`;

export const Footer = styled.footer`
  font-size: 1rem;
  color: white;
  text-align: center;
`;
