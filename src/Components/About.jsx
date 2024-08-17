import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import Js from "../assets/icons8-javascript.svg";
import Css from "../assets/icons8-css.svg";
import Html from "../assets/icons8-html.svg";
import React from "../assets/react.svg";
import Figma from "../assets/icons8-figma.svg";
import Firebase from "../assets/icons8-firebase.svg";
import Github from "../assets/icons8-github.svg";
import Tailwind from "../assets/icons8-tailwindcss.svg";
import Creatives from "../assets/creatives.png";
import Collabs from "../assets/collabs.webp";
import communities from "../assets/communities.webp";
import Jobs from "../assets/creatives.png";
import styled from "styled-components";
import { Card, Center } from "./container";
import Technologies from "../assets/portfolio-2.webp";

const cardData = [
    {
        image : Technologies,
        name : "Technologies"
    },
    {
        image : Creatives,
        name : "Creatives"
    },
    {
        image : Collabs,
        name : "Collabs"
    },
    {
        image : communities,
        name : "Communities"
    },
 
]

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 155px;
  gap: 25px;
  text-align: center;

  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
const IconDiv = styled.div`
  max-width: 100px;
  max-height: 100px;
  margin: 20px auto;

  @media only screen and (max-width: 500px) {
    max-width: 50px;
    max-height: 50px;
  }
`;
const NetworkingContainer = styled.div`
  display: flex;
`;
const Section = styled.div`
   display : grid;
   grid-template-columns: 1fr ;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    gap: 25px;
  }
`;

const About = () => {
  return (
    <>
      <section
        style={{
          marginTop: "110px",
          padding: "0 0px 0 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Software Engineering Enthusiast</h3>
        <Splide
          options={{
            type: "loop",
            autoplay: true,
            speed: 10000,
            interval: 2000,
            trimSpace: true,
            pagination: false,
            perMove: 2,
            arrows: false,
            perPage: 2,
            easing: " cubic-bezier(0.25, 1, 0.5, 1)",
            breakPoints: {
              1024: {
                perPage: 2,
              },
              768: {
                perPage: 1,
              },
              480: {
                perPage: 0.2,
              },
            },
          }}
        >
          <SplideSlide>
            <h4 style={{ fontSize: "4.5rem", color: "white" }}>
              Frontend Developer
            </h4>
          </SplideSlide>
          <SplideSlide>
            <h4 style={{ fontSize: "4.5rem", color: "white" }}>
              Software Engineer
            </h4>
          </SplideSlide>
          <SplideSlide>
            <h4 style={{ fontSize: "4.5rem", color: "white" }}>
              Frontend Developer
            </h4>
          </SplideSlide>
          <SplideSlide>
            <h4 style={{ fontSize: "4.5rem", color: "white" }}>
              Software Engineer
            </h4>
          </SplideSlide>
          <SplideSlide>
            <h4 style={{ fontSize: "4.5rem", color: "white" }}>
              Frontend Developer
            </h4>
          </SplideSlide>
          <SplideSlide>
            <h4 style={{ fontSize: "4.5rem", color: "white" }}>
              Software Engineer
            </h4>
          </SplideSlide>
          <SplideSlide>
            <h4 style={{ fontSize: "4.5rem", color: "white" }}>
              Frontend Developer
            </h4>
          </SplideSlide>
          <SplideSlide>
            <h4 style={{ fontSize: "4.5rem", color: "white" }}>
              Software Engineer
            </h4>
          </SplideSlide>
        </Splide>
      </section>

      <Center $padding_10>
        <Main>
            {cardData.map((item, index) => (
                <Section>
                    <Card>
                  <img
                    src={item.image}
                    style={{
                      objectFit: "cover",
                      maxHeight: "400px",
                      borderRadius: "20px",
                      objectPosition: "top",
                    }}
                    alt=""
                  />
                <div>
                  <h2>{item.name}</h2>
                  <h3>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, consectetur.
                  </h3>
                </div>
              </Card>
               </Section>
            ))}
          </Main>
      </Center>
    </>
  );
};
export default About;
