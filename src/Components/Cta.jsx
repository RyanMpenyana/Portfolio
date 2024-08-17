import { Card, Center } from "./container";
import styled from "styled-components";
import Nodejs from '../assets/icons8-nodejs-48.svg'
import React from '../assets/react.svg'
import Js from '../assets/icons8-javascript.svg'
import Figma from '../assets/icons8-figma.svg'
import Html  from '../assets/icons8-html.svg'
import Css from '../assets/icons8-css.svg'
import Tailwind from '../assets/icons8-tailwindcss.svg'
import FireBase from '../assets/icons8-firebase.svg'
import Github from '../assets/icons8-github.svg'
const CtaContainer = styled.div`
    display : flex;
    justify-content : center;
    margin-top : 130px;
    // gap : 200px;
    width : auto;
    `
    const IconsDiv = styled.div`
    display: grid;
    align-items : center;
    grid-template-columns: repeat(4, auto);
    grid-template-rows : auto;
    grid-gap : 20px;

`
const RecruitersTypography = styled.div`
    width : 100%;
`
const Cta = () => {
    return (
        <Center>
          <CtaContainer>
            <RecruitersTypography>
                <h2>For Recruiters</h2>
                <h3>Find the best talent for your team</h3>
                <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat aliquam eveniet modi! Incidunt tempora voluptatem delectus natus minima blanditiis suscipit quod rem atque quas nobis at, nostrum amet illum molestiae. Minima debitis fugiat possimus voluptates eaque quos rem pariatur labore quis! Inventore perferendis non in, reiciendis nostrum ipsam officiis iure?</h3>
                <div style={{display : 'flex'}}>
                    <i style={{color : ' #5534F7'}} className="fa fa-circle-check"></i>
                    <h3>Post a job</h3>
                </div>
                <div  style={{display : 'flex'}}>
                    <i style={{color : ' #5534F7'}} className="fa fa-circle-check"></i>
                    <h3>Contact Me</h3>
                </div>
                <div  style={{display : 'flex'}}>
                    <i style={{color : ' #5534F7'}} className="fa fa-circle-check"/>
                    <h3>Get Started</h3>
                </div>
            </RecruitersTypography>
            <IconsDiv>
                <div>
                <Card>
                    <img src={Nodejs} alt="" />
                </Card>
                </div>
               
                <Card>
                    <img src={Js} alt="" />
                </Card>
                <Card>
                    <img src={React} alt="" />
                </Card>
                <div></div>
                <Card>
                    <img src={Figma} alt="" />
                </Card>
                <Card>
                    <img src={Html} alt="" />
                </Card>
                <Card>
                    <img src={Css} alt="" />
                </Card>
                <Card>
                    <img src={Tailwind} alt="" />
                </Card>
                <Card>
                    <img src={FireBase} alt="" />
                </Card>
                <Card>
                    <img src={Github} alt="" />
                </Card>
                <Card>
                    <img src={Nodejs} alt="" />
                </Card>
                <Card>
                    <img src={React} alt="" />
                </Card>
                <div>
                    {/* <img src={Nodejs} alt="" /> */}
                </div>
                <Card>
                    <img src={React} alt="" />
                </Card>
                <Card>
                    <img src={Nodejs} alt="" />
                </Card>
                <Card>
                    <img src={React} alt="" />
                </Card>
            </IconsDiv>
          </CtaContainer>

        </Center>
        );
}

export default Cta