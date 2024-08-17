import styled from "styled-components";
import { ButtonCta, Center, FlexDiv } from "./container";

const Modal = styled.div`
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items : center;
  flex-direction: column;
  height: 100%;
  width : 100%;
  border-radius: 25px;
  background: rgba(0, 0, 0, 0.4);
  outline: none;
  z-index : 2;
  animation: show 1.1s ease-in-out; 

  @keyframes show {
    from {
    opacity: 0;
    },
    to {
    opacity: 1;
    }
  };
 h3{
     color : #D8D9D7;
 };
  img {
    border-radius: 20px 20px 0 0;
  }
`;
const ModalContent = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    width : 900px;
`;
const ProjectModal = (props) => {
  return (
      <Modal>
        <button style={{width : '50px', height : '50px', borderRadius : '50%', outline : 'none', border : 'none', background : '#5534F7', color : "white"}} onClick={props.onClick}>
            <i className="fa fa-xmark" style={{fontSize : '1.5rem'}}></i>
        </button>
        <FlexDiv>
            <i onClick={props.onPrev} className="fa fa-chevron-left" style={{color:'white', width : '20px', fontSize : '2rem', marginTop : '250px'}}></i>
        <ModalContent>
            <img src={props.Image} alt="image" />
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde eius
          odit error debitis officia praesentium nobis autem illum tempora
          sapiente, distinctio asperiores excepturi ut sequi recusandae
          necessitatibus. Officia optio ex minima, non sapiente amet natus
          blanditiis iure? Sit magnam aperiam dolorem illo perferendis sapiente
          perspiciatis, deserunt velit incidunt deleniti quasi.
        </h3>
        <div style={{display : 'flex', justifyContent : 'space-between'}}>
            <ButtonCta title="visit">Preview</ButtonCta>
            <ButtonCta title="Code">Source Code</ButtonCta>
        </div>
            </ModalContent>
            <i onClick={props.onNext}  className="fa fa-chevron-right" style={{color:'white', width : '20px', fontSize : '2rem', marginTop : '250px'}}></i>
        </FlexDiv>
      </Modal>
  );
};
export default ProjectModal;
