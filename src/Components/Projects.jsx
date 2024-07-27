import styled from 'styled-components'
import { FlexDiv } from './container'
import Tenxrs from '../assets/Tenxrs.png'
import Coffee from '../assets/coffee.png'
import Weather from '../assets/weather.png'
import Quotes from '../assets/quotes.png'
import ExpenseFilter from '../assets/Expense-Filter.png'
const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap : 25px;
    margin-top : 132px;
`
const ProjectDiv = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // color :white;
    // // max-height : 400px;
    // background : white;
    // margin : 10px;
    // border-radius : 10px;
`
const Projects = () => {
    return (
        <ProjectsContainer>
        <h1 style={{textAlign:'center'}}>Projects</h1>
        <h3 style={{textAlign:'center'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, quos.</h3>
        <FlexDiv>
            <ProjectDiv>
                    <img  style={{width : '100%', height : '100%'}} src={Tenxrs} alt="" />
            </ProjectDiv>
            <ProjectDiv>
            <img src={Coffee} alt="" />
            </ProjectDiv>
            <ProjectDiv>
            <img src={Weather} alt="" />
            </ProjectDiv>
            <ProjectDiv>
            <img src={Quotes} alt="" />
            </ProjectDiv>
            <ProjectDiv>
            <img src={ExpenseFilter} alt="" />
            </ProjectDiv>
        </FlexDiv>
        </ProjectsContainer>
    )
}
export default Projects