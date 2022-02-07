import styled from "styled-components";

export const ProjectImgContainer = styled.div`
  img {
    width: 100%;
  }
  .alice-carousel__prev-btn {
    text-align: center;
  }

  .alice-carousel__dots-item:not(.__custom):hover,
  .alice-carousel__dots-item:not(.__custom).__active {
    background-color: #29282d;
  }

  .alice-carousel__dots-item:not(.__custom) {
    background-color: #f1ede9;
  }
`;

export const ProjectContainer = styled.div`
  #work_ul {
    text-align: left;
    margin-bottom: 10px;
    span {
      border-bottom: 1px solid black;
    }
  }
  li {
    margin-top: 10px;
  }
  #project_descr {
    div {
      margin-top: 5px;
    }
  }
  @media screen and (max-width: 450px) {
    #project_title {
      font-size: 18px;
    }
    #project_descr {
      font-size: 12px;
    }
    ul {
      padding-inline-start: 15px;
    }
  }
  @media screen and (max-width: 320px) {
    #project_title {
      font-size: 14px;
    }
    #project_descr {
      font-size: 10px;
    }
    #work_ul {
      text-align: center;
    }
    ul {
      padding-inline-start: 0px;
    }
  }
`;

export const ProjectLinkContainer = styled.div`
  span {
    text-decoration: underline;
    margin: 0 5px;
    color: #625c60;
  }
  a:hover,
  a:active {
    text-decoration: none;
    color: #6868ac;
  }
`;
