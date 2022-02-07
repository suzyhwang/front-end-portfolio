import React from "react";

import { AboutContainer } from "./About.style";

function About({ data }) {
  return (
    <AboutContainer className={data.class}>
      <div id="about_img">
        <img src={data.img}></img>
      </div>
      <div id="about_descr">
        <div>{data.title}</div>
        <div>{data.descr}</div>
      </div>
    </AboutContainer>
  );
}

export default About;
