import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  width: 300px;
  margin: 15px 0;
  #about_img {
    display: flex;
    margin-right: 15px;
    align-items: center;
    img {
      width: 30px;
    }
  }
  #about_descr {
    text-align: left;
  }

  @media screen and (max-width: 320px) {
    #about_img {
      margin-right: 5px;
      img {
        width: 25px;
      }
    }
  }
`;
