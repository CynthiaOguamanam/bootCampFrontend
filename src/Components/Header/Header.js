import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// import BsSearch from 'react-icons/bs'
// import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <Container>
        <Hold>
        <Wrapper>
            <LogoHold>
                <Logo style={{
                    width:"100px"
                }} src='/logo.png' alt=''/>
            </LogoHold>
           <Div>
           <Nav2 to='/'>Home</Nav2>
           <Nav1 to='/about'>About</Nav1>
           <Nav1 to='/more'>Services</Nav1>
           <Button to='/register'>Book Schedule</Button>
           </Div>
        </Wrapper>
        {/* <Line></Line> */}
        </Hold>
    </Container>
  )
}

export default Header;



const Container = styled.div`
    width: 100%;
    height: 100px;
    background-color: transparent;
    /* background: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Georgia";
    position: fixed;
    z-index: 10;

    @media Screen and (max-width: 768px){
        /* background-color: red; */
    }
    
`;
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;


    /* background-color: blue; */
`;
const Hold = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;

    /* background-color: blue; */
`;
const Line = styled.div`
    width: 100%;
    height: 1.5px;
    background-color: white;
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        width: 90%;
    }
`;
const Div = styled.div`
    width: 35%;
    height: 80px;
    /* background-color: grey; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        display: none;
    }
    
`;
const NavHold = styled.div`
    width: 400px;
    height: 80px;
    /* background-color: grey; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
const LogoHold = styled.div``;
const Logo = styled.img``;
const Nav2 = styled(Link)`
    font-size: 13px;
    font-weight: 600;
    color: white;
    text-decoration: none;
    font-family: poppins;

`;
const Nav1 = styled(Link)`
    font-size: 13px;
    font-weight: 600;
    color: white;
    text-decoration: none;
    font-family: poppins;

`;
const Nav3= styled(Link)`
    font-size: 20px;
    font-weight: 600;
    color: white;
    text-decoration: none;

`;
const Button1 = styled(Link)`
    width: 120px;
    height: 40px;
    font-size: 20px;
    font-weight: 600;
    font-family: "Georgia";
    border-radius: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    /* border: 1.5px solid black; */
    background: transparent;


    :hover{
        background: transparent;
        border: 2px solid grey;
        transition: all 350ms;
        cursor: pointer;
    }

`;
const Button = styled(Link)`
    padding: 20px 35px;
    font-size: 15px;
    font-weight: 600;
    font-family: "poppins";
    border-radius: 10px;
    border: 1px solid white;
    /* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    /* border: 1.5px solid black; */
    background: transparent;


    :hover{
        background: transparent;
        transform: scale(1.1);
        transition: all 350ms;
        cursor: pointer;
    }

`;