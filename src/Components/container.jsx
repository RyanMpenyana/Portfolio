import styled from 'styled-components'

export const Center = styled.div`
    padding : ${props => props.$padding_10 ?'0 15%' : '0 20%'} ;
    display : flex;
    flex-direction : column;
    justify-content : center;
` 
export const ButtonCta = styled.button`
    text-align : center;
    padding : 20px;
    max-width : 350px;
    border-radius : 30px;
    outline : none;
    border : none;
    background-color : #4f81ff;
    color : white;
`
export const Header = styled.h4`
    font-size : 54px;
    text-align center;
    color : white;
    font-family : 'Albert Sans', serif;
    margin-bottom : 42px;
    span{
        background-image : url('https://images.unsplash.com/photo-1720983415059-43ec4007cf97?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-position : center;
    }
`   
export const Card = styled.div`
    background: ${props => props.$bgColor ? props.$bgColor : 'linear-gradient(rgba(88, 98, 206, .3), #1e2142 , #0e0e16,  rgb(0 0 0 / 40%) )'};
    display: flex;
    flex-wrap : wrap;
    border-radius : 25px; 
    backdrop-filter : blur(10px);
    border : 1px solid #1E232E;
`
export const FlexDiv = styled.div`
    display :flex;
`