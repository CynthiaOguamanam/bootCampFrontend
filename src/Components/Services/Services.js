import React from 'react'
import styled from 'styled-components'

const Services = () => {
  return (
      <Container>
          <Wrapper>
          <Card>one</Card>
              <Card>one</Card>
              <Card>one</Card>
              <Card>one</Card>
              <Wrap>
             
              </Wrap>
          </Wrapper>
      </Container>
  )
};
export default Services;

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
/* background-color: green; */
`;
const Wrap = styled.div`

`;
const Wrapper = styled.div`
    width: 80%;
    height: 100vh;
    display: flex;
     background-color: white;       
    margin-top: 80px;  
`;

const Card = styled.div`
    width: 500px;
    height: 200px;
    background-color: red;
    border: 1px solid black;
`;