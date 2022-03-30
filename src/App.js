import "./App.css";
import {
  Header,
  Title,
  BodyContainer,
  Container,
  ContentBox,
  Footer,
} from "./App.style";
import About from "./components/about/About";
import { AboutContainer } from "./components/about/About.style";
import Project from "./components/projects/Project";

function App() {
  const Aboutdata = [
    {
      img: "./images/github.svg",
      class: "github",
      title: "깃허브",
      descr: "suzyhwang",
      link: "https://github.com/suzyhwang",
    },
    {
      img: "./images/email.svg",
      class: "email",
      title: "이메일",
      descr: "suzysoyeonghwang@gmail.com",
      link: "mailto:suzysoyeonghwang@gmail.com",
    },
    {
      img: "./images/blog.svg",
      class: "blog",
      title: "블로그",
      descr: "https://mari-mo.tistory.com",
      link: "https://mari-mo.tistory.com",
    },
    {
      img: "./images/phone.svg",
      class: "phone",
      title: "연락처",
      descr: "010-6466-1110",
      link: "tel:010-6466-1110",
    },
  ];

  const Skillsdata = [
    {
      title: "LANGUAGE",
      img: "./images/skills_language.svg",
    },
    {
      title: "FRONT-END",
      img: "./images/skills_fe.svg",
    },
    {
      title: "BACK-END",
      img: "./images/skills_be.svg",
    },
    {
      title: "DESIGN",
      img: "./images/skills_design.svg",
    },
    {
      title: "DEPLOYMENT",
      img: "./images/skills_deploy.svg",
    },
    {
      title: "ETC",
      img: "./images/skills_etc.svg",
    },
  ];

  const handleDragStart = (e) => e.preventDefault();

  const YeollinjibItems = [
    <img
      src="./images/yeollin-jib_landing.png"
      onDragStart={handleDragStart}
    />,
    <img src="./images/yeollin-jib_main.png" onDragStart={handleDragStart} />,
    <img src="./images/yeollin-jib_post.png" onDragStart={handleDragStart} />,
    <img src="./images/yeollin-jib_my.png" onDragStart={handleDragStart} />,
  ];

  const DevCheckItems = [
    <img src="./images/dev_landing.png" onDragStart={handleDragStart} />,
    <img src="./images/dev_main.png" onDragStart={handleDragStart} />,
    <img src="./images/dev_my.png" onDragStart={handleDragStart} />,
  ];

  const WeavelItems = [
    <img src="./images/weavel_main.png" onDragStart={handleDragStart} />,
    <img src="./images/weavel_main2.png" onDragStart={handleDragStart} />,
    <img src="./images/weavel_main3.png" onDragStart={handleDragStart} />,
    <img src="./images/weavel_my.png" onDragStart={handleDragStart} />,
  ];

  const Projectdata = [
    {
      title: "Decheck",
      img: "",
      descr:
        "공부 시간을 시각적인 표로 기록하고 할일 작성 및 기록된 시간을 그래프화한 플랫폼",
      dates: "2021.12 - 2022.01 (개인 프로젝트 / 4주)",
      links: [
        "https://decheck-c8343.web.app/",
        "https://github.com/suzyhwang/Decheck",
        "https://github.com/suzyhwang/Decheck/wiki",
      ],
      works: [
        "Figma를 사용한 UI/UX 디자인",
        "파이어베이스를 이용한 서버 및 파이어스토어 데이터베이스 구현 및 배포",
        "랜딩페이지, 메인 페이지, 로그인/회원가입 페이지, 마이페이지 구현",
        "기록결과 이미지화로 카카오톡 공유하기",
      ],
      stacks: "JavaScript, HTML, SCSS, Firebase",
      items: DevCheckItems,
    },
    {
      title: "열린집",
      img: "./images/yeollin-jib_landing.png",
      descr: "일정 시간동안 집을 공개해 나눔을 진행하는 이삿짐 처분 플랫폼",
      dates: "2021.10 - 2021.11 (팀 프로젝트 / 4주)",
      position: "Full Stack, Team Leader",
      links: [
        "https://yeollin-jib.site/",
        "https://github.com/codestates/Yeollin-Jib",
        "https://codestates.notion.site/13-Codemon-Yeollin-Jip-59f71deb5a7c41308592c2a3d0510010",
      ],
      works: [
        "프로젝트 총괄: 업무 분담 및 전반적인 개발 상황 관리 및 프로젝트 문서화 작업",
        "프론트엔드: 랜딩 페이지, 404 페이지, 검색어 검색 기능, 게시글 타이머 컴포넌트, 반응형 웹 구현",
        "백엔드: 회원 정보 조회 및 수정 기능, 게시물 댓글 CRUD, 게시글 찜하기 CRD, OAuth 인증 로그인 구현",
      ],
      stacks:
        "TypeScript, Node.js, Mysql, Sequelize, Express, Styled-components, React, Redux-toolkit",
      items: YeollinjibItems,
    },
    {
      title: "웨블 (Weavel)",
      img: "",
      descr:
        "지도에서 선택한 날씨를 시각적으로 볼 수 있고 상세 날씨 정보를 제공하며 날씨 사진첩을 제공하는 플랫폼",
      dates: "2021.10 (팀 프로젝트 / 2주)",
      position: "Front-end, Team Leader",
      links: [
        "https://weavel.site/",
        "https://github.com/codestates/Weavel",
        "https://github.com/codestates/Weavel/wiki",
      ],
      works: [
        "프로젝트 총괄: 업무 분담 및 전반적인 개발 상황 관리 및 프로젝트 문서화 작업",
        "프론트엔드: 로그인 페이지, 마이페이지 구현",
      ],
      stacks: "React, Styled-components",
      items: WeavelItems,
    },
  ];

  const TopButtonHandler = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header>
        <div>
          <a href="#about">
            <span>About</span>
          </a>
          <a href="#skills">
            <span>Skills</span>
          </a>
          <a href="#projects">
            <span>Projects</span>
          </a>
          <a
            href="https://branch-condition-84d.notion.site/3af47e8e259242aa9d2e1f8725c0153b"
            target="_blank"
          >
            <span>CV</span>
          </a>
        </div>
      </Header>
      <BodyContainer>
        <Container id="intro">
          <Title>황소영</Title>
          <div id="intro_title">프론트엔드 개발자 포트폴리오</div>
        </Container>
        <div id="about" class="space"></div>
        <Container>
          <Title>ABOUT</Title>
          <ContentBox>
            <div id="about_container">
              {Aboutdata.map((data, idx) => {
                return data.link ? (
                  <a href={data.link} target="_blank" key={idx}>
                    <About data={data} />
                  </a>
                ) : (
                  <About data={data} />
                );
              })}
            </div>
          </ContentBox>
        </Container>
        <div id="skills" class="space"></div>
        <Container>
          <Title>SKILLS</Title>
          <div id="skill_container">
            {Skillsdata.map((data, idx) => {
              return (
                <ContentBox width={"none"} key={idx}>
                  <div id="skill_title">{data.title}</div>
                  <div class="center">
                    <img src={data.img} id="skill_img" />
                  </div>
                </ContentBox>
              );
            })}
          </div>
        </Container>
        <div id="projects" class="space"></div>
        <Container>
          <Title>PROJECTS</Title>
          {Projectdata.map((data, idx) => {
            return (
              <ContentBox margin={"margin"} key={idx}>
                <Project data={data} />
              </ContentBox>
            );
          })}
        </Container>
      </BodyContainer>
      <img src="./images/top.svg" id="go_top" onClick={TopButtonHandler} />
      <Footer>Copyright © 2022 - Soyeong Hwang</Footer>
    </>
  );
}

export default App;
