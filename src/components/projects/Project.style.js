import styled from "styled-components";

export const ProjectImgContainer = styled.div`
  padding: 10px;
  img {
    width: 80%;
  }
  .alice-carousel__prev-btn {
    text-align: center;
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
