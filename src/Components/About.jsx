import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import Js from '../assets/icons8-javascript.svg'
import Css from '../assets/icons8-css.svg'
import Html from '../assets/icons8-html.svg'
import React from '../assets/react.svg'
import Figma from '../assets/icons8-figma.svg'
import Firebase from '../assets/icons8-firebase.svg'
import Github from '../assets/icons8-github.svg'
import Tailwind from '../assets/icons8-tailwindcss.svg'
import Creatives from '../assets/creatives.png'
import styled from 'styled-components'
import { Card, Center } from './container';


const Main = styled.main`
    display : grid;
    grid-template-columns: 1fr 1fr;
    margin-top : 155px;
    gap :25px;
    text-align : center;
`
const IconDiv = styled.div`
    width : 100px;
    height :100px;
    margin : 20px auto;
`
const NetworkingContainer = styled.div`
    display: flex;
`

const About = () => {
    return (
        <>
            <section  style={{marginTop : '110px'}}>
                <h3 style={{ textAlign: 'center' }}>Software Engineering Enthusiast</h3>
                <Splide options={
                    {
                        type: "loop",
                        autoplay: true,
                        speed: 1000,
                        pagination : false,
                        perMove: 3,
                        arrows : false,
                        rewind: true,
                        perPage: 2,
                }}>
                    <SplideSlide>
                        <h4 style={{ fontSize: '100px', color : 'white'}}>Frontend Developer</h4>
                    </SplideSlide>
                    <SplideSlide>
                        <h4 style={{ fontSize: '100px', color : 'white' }}>Software Engineer</h4>
                    </SplideSlide>
                    <SplideSlide>
                        <h4 style={{ fontSize: '100px', color : 'white' }}>Frontend Developer</h4>
                    </SplideSlide>
                    <SplideSlide>
                        <h4 style={{ fontSize: '100px', color : 'white' }}>Software Engineer</h4>
                    </SplideSlide>
                </Splide>
            </section>

            <Center $padding_10>
                <Main>
                    <Card>
                     <div>
                        <div style={{display : 'flex', flexWrap : 'wrap', height : '400px', padding : '10%'}}>
                        <IconDiv>
                            <Card>
                            <img src={Js} alt="" />
                            </Card>
                        </IconDiv>
                        <IconDiv>
                            <Card>
                            <img src={Css} width={800} alt="" />
                            </Card>
                        </IconDiv>
                        <IconDiv>
                            <Card >
                            <img src={Html} alt="" />
                            </Card>
                        </IconDiv>
                        <IconDiv>
                        <Card>
                            <img src={React} alt="" />
                            </Card>
                        </IconDiv>
                        <IconDiv>
                        <Card>
                            <img src={Figma} alt="" />
                            </Card>
                        </IconDiv>
                        <IconDiv>
                        <Card>
                            <img src={Firebase} alt="" />
                            </Card>
                        </IconDiv>
                        <IconDiv>
                        <Card>
                            <img src={Github} alt="" />
                            </Card>
                        </IconDiv>
                        <IconDiv>
                        <Card>
                            <img src={Tailwind} alt="" />
                            </Card>
                        </IconDiv>
                        </div>
                        <div>
                        <h1>Technologies</h1>
                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur.</h3>
                        </div>
                     </div>
                    </Card>
                    <Card>
                        <div>
                            <img src={Creatives} style={{objectFit : 'cover', height : '400px'}} alt="" />
                            <h1 style={{padding :'0 10% 5%'}}>Networking</h1>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, consectetur.</h3>
                        </div>
                    </Card>
                </Main>
                <section style={{display : 'flex', gap : '25px', marginTop : "25px"}}>
                <Card>
                    <div>d</div>
                    <div></div>
                </Card>
                <Card>
                    <div></div>
                    <div></div>
                </Card>
                <Card>
                    <div></div>
                    <div></div>
                </Card>
              </section>
            </Center>
        </>
    )
}
export default About;