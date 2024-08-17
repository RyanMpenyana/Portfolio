import styled from "styled-components";
import { FlexDiv } from "./container";
import Tenxrs from "../assets/Tenxrs.png";
import Coffee from "../assets/coffee.png";
import Weather from "../assets/weather.png";
import Quotes from "../assets/quotes.png";
import ExpenseFilter from "../assets/Expense-Filter.png";
import FaceBrain from '../assets/FaceDetection.png'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ProjectModal from "./ProjectModal";
import { useEffect, useRef, useState } from "react";
const projects = [
  {
    image: Tenxrs,
    title: "Tenxrs",
  },
  {
    image : FaceBrain,
    title : "Smart Brain"
  },
  {
    image: Coffee,
    title : 'OhhCaffeine'
  },
  {
    image: Weather,
    title : 'Cod-Weather'
  },
  {
    image: Quotes,
    title : 'Legendary Quotes'
  },
  {
    image: ExpenseFilter,
    title : 'Expense Filter'
  },
];

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding : 0 12px;
  gap: 25px;
  margin-top: 32px;
  outline :none;

`;
const ProjectTypo = styled.div`
  margin-top: 132px;
`;
const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  max-height: 600px;
  background: white;
  border-radius: 15px;
  outline: none;
  overflow : hidden;
  
  img{
    width: 100%;
    height: 500px;
  }
  @media only screen and (max-width : 500px){
    img{
        height : 200px ;
        width : 100%;
        object-fit : cover;
    }
  }
`;

const Projects = () => {
    const [index, setIndex] = useState(0)
    const [isModalOpen, setModalOpen] = useState(false)

    const ref = useRef()
    
    useEffect((e) => {
        ref.current.classList.add('cursor')
    },[])

    const indexProvider = (item) => {
         setIndex(item)
         setModalOpen((prev => (
            !prev ? true : false
         )))
        }

    const nextProjectHandler = () => {
        setIndex(index + 1)
        if(index === projects.length-1){
            setIndex(0)
        }
    }    
    const prevProjectHandler = () => {
        setIndex(index - 1)
        if(index <= 0){
            setIndex(projects.length-1)
        }
    }
  return (
    <div ref={ref}>
      <ProjectTypo>
        <h1 style={{ textAlign: "center" }}>Projects</h1>
        <h3 style={{ textAlign: "center" }}>
          Real Eyes Realize Real Lies. Proven Software Engineer.
        </h3>
      </ProjectTypo>
      <FlexDiv>
   
        <ProjectsContainer>
        <Splide options={
                    {
                        // rewind : true,
                        // autoplay: true,
                        // speed: 10000,
                        // interval :30000,
                        pagination: false,
                        arrows : true,
                        perMove: 1,
                        perPage : 2,
                        gap : '20px',
                       
                        // easing :' cubic-bezier(0.25, 1, 0.5, 1)',
                        breakpoints : {
                            1024 : { perPage : 2 },
                            768 : { perPage : 1 },
                            500 : {perPage : 1.2, arrows : false}
                        }
                }}>
          {projects.map((item, index) => (
            <SplideSlide key={index}>
            <div onClick={() => (
                indexProvider(index)
            )}>
              <ProjectDiv>
                <img
                  src={item.image}
                  alt="Carousel Image"
                />
              </ProjectDiv>
            </div>
        </SplideSlide>
          ))}
        </Splide>
        </ProjectsContainer>
      </FlexDiv>
     <FlexDiv>
     {
        isModalOpen ? <ProjectModal onPrev={prevProjectHandler} onNext={() =>(nextProjectHandler())} onClick={() => (isModalOpen && setModalOpen(false))} Image={index >= 0  ? projects[index].image : ''}  /> : ''
       }
     </FlexDiv>
    </div>
  );
};
export default Projects;
