import Graph from "./interface/Grid";
import styled from "styled-components";
import { ButtonCta, Center } from "./container";
import {Header} from './container'
import { Suspense } from "react";
import { Canvas } from '@react-three/fiber'
import Avatar from "./Model/Avatar";
import Tabulio from '../assets/tabulio-demo.mp4'

const LandingContent = styled.div`
    display: flex;
    flex-direction : column;
    justify-content center;
    position : absolute;
    top : -100px;
    height : 100vh;
    width : 100%;
    text-align : center
`
const ContentContainer = styled.div`
    position : absolute;
    top : 30rem;
    width : 100%;
`
const VideoContainer = styled.video`
    display : flex;
    justify-content : center;
    position : relative;
    top : -50px;
    border-radius : 15px;
    border-left : 1px solid grey;
    border-right : 1px solid grey;
    outline : none;
    max-height : 620px;
    width : 100%;

`
const Landing = () => {
  return (
    <>
      <Graph />
      <LandingContent>
      <Canvas>
            <Suspense>
                <Avatar/>
            </Suspense>
        </Canvas>
        <ContentContainer>
            <div style={{textAlign :"center", width : '100%'}}>
            <Header>Showcase, connect, and grow your tech team! <br/> <span>Frontend Developer, Ryan.</span></Header>
            <h3 style={{ textAlign:'center'}}>Share your works, connect with employers, and network with tech talents. <br/>
            We are the social networking platform for global talents.</h3>
            </div>
            
            <ButtonCta>
                Hire Me
            </ButtonCta>
        </ContentContainer>
      </LandingContent>
      <Center>

          <VideoContainer style={{objectFit: 'cover'}} src={Tabulio} preload="auto" playsInline autoPlay={true} loop={true}></VideoContainer>
      </Center>
    </>
  );
};
export default Landing;
