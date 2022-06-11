import React from 'react'
import styled from 'styled-components'

const Services = () => {
  return (
      <Container>
          <Wrapper>
              <h1>Why Choose Us?</h1>
        
              <Wrap>
              <Card>
                  <One>
                      <Icon src='/plane.png' alt=''/>
                      <p>Air Freight</p>
                  </One>
                  <Two>We also make air deliveries and freights to your specified location following the time frame stated</Two>
              </Card>
              <Card>
                  <One>
                      <Icon src='/shipcon.png' alt=''/>
                      <p>Sea Freight</p>
                  </One>
                  <Two>We also make Ship deliveries and freights to your specified location following the time frame stated</Two>
              </Card>
              <Card>
                  <One>
                      <Icon src='/land.png' alt=''/>
                      <p>Land Freight</p>
                  </One>
                  <Two>We also make Land deliveries and freights to your specified location following the time frame stated</Two>
              </Card>
              </Wrap>
              <Wrap>
              <Card>
                  <One>
                      <Icon src='/land.png' alt=''/>
                      <p>Land Freight</p>
                  </One>
                  <Two>We also make land deliveries and freights to your specified location following the time frame stated. We do not fail our clients., as we work wit diligency, efficiency and continuity.</Two>
              </Card>
              <Card>
                  <One>
                      <Icon src='/plane.png' alt=''/>
                      <p>Air Freight</p>
                  </One>
                  <Two>We also make land deliveries and freights to your specified location following the time frame stated. We do not fail our clients., as we work wit diligency, efficiency and continuity.</Two>
              </Card>
              <Card>
                  <One>
                      <Icon src='/land.png' alt=''/>
                      <p>Land Freight</p>
                  </One>
                  <Two>We also make land deliveries and freights to your specified location following the time frame stated. We do not fail our clients., as we work wit diligency, efficiency and continuity.</Two>
              </Card>
              </Wrap>
          </Wrapper>
      </Container>
  )
};
export default Services;

const Icon = styled.img`
    width: 60px;
`;
const One = styled.div`
    width:100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const Two = styled.div`
    text-align: center;
    width: 300px;
`;
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

@media Screen and (max-width:768px){
    padding-top: 400px;
    
}
/* background-color: green; */
`;
const Wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media Screen and (max-width: 768px){
        flex-direction: column;
        width: 100%;

    }
    /* background-color: pink; */
`;
const Wrapper = styled.div`
    width: 90%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding-top: 100px ;

    @media Screen and (max-width: 768px){
        
    }
    /* margin-top: 80px;   */
`;

const Card = styled.div`
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: red; */
    border: 1px solid black;
    margin: 10px;

    
    @media Screen and (max-width: 768px){
        width: 300px;
    }
`;