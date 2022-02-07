import React from "react";

import {
  ProjectContainer,
  ProjectImgContainer,
  ProjectLinkContainer,
} from "./Project.style";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function Project({ data }) {
  return (
    <ProjectContainer>
      <ProjectImgContainer>
        <AliceCarousel mouseTracking items={data.items} />
      </ProjectImgContainer>
      <div id="project_title">{data.title}</div>
      <div id="project_descr">
        <div>{data.descr}</div>
        <div>{data.dates}</div>
        {data.position ? <div>포지션: {data.position}</div> : ""}
        <ProjectLinkContainer>
          <span>
            <a href={data.links[0]} target="_blank">
              배포 링크
            </a>
          </span>
          <span>
            <a href={data.links[1]} target="_blank">
              깃헙
            </a>
          </span>
          <span>
            <a href={data.links[2]} target="_blank">
              기획서
            </a>
          </span>
        </ProjectLinkContainer>
        <div>사용스택: {data.stacks}</div>
        <div>
          <ul id="work_ul">
            <span>담당업무</span>
            {data.works.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </ProjectContainer>
  );
}

export default Project;
