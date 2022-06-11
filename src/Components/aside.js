import React, {useEffect} from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {Link} from 'react-router-dom';
// import {GiCargoShip} from 'react-icons/gi';



const LandingPage = () => {

  useEffect(() => {
    AOS.init({duration:3000})
}, []);

  return (
    <Container>
        <Wrapper>
          <ImageHold data-aos="flip-right">
            {/* <img style={{
              width:"800px"
            }} src='/ship.png' alt=''/> */}
          </ImageHold>
          <TextHold data-aos="flip-left">
            <h1 style={{
              "font-size":"40px",
              fontFamily:"Georgia"

            }}>PORT EXPRESS HANDLINGS Ltd</h1>
            <h2 style={{
              fontFamily:"Georgia"
            }}>A Shipping Company for your freight-forwarding,  Import And Export</h2>
            <h3  style={{
              fontFamily:"Georgia"
            }}>A complete transport solution for you</h3>
            <Button to='/service'>View More</Button>
          </TextHold>
        </Wrapper>
        <Call>
            <h4>Call free: 09022647731</h4>
            <h4 style={{
              color: "white"
            }}>portexpresshandlings@yahoo.com</h4>
          </Call>
          <Logical>
            <h1>Logical Difference</h1>
            <Topic>
              <h4>Reliability</h4>
              <h4>Transparency</h4>
              <h4>Efficiency</h4>
            </Topic>
            <Body>

            </Body>
          </Logical>

       <Down>
       <MidWrap>
          <Cards data-aos="fade-right"  style={{
            "background-image":"url('/pehl bc.jpg')"
          }}>
            
          </Cards>
          <Cards data-aos="fade-right" style={{
            "background-image":"url('/port4.jpg')"
          }}>
            
          </Cards>
          <Cards data-aos="fade-left"  style={{
            "background-image":"url('/port.jpg')"
          }}>
           
          </Cards>
          <Cards data-aos="fade-left" style={{
            "background-image":"url('/coal port.jpg')"
          }}>
           
          </Cards>
        </MidWrap>
        <div style={{
          width:"100%",
          marginTop:"20px",
          height: "1.5px",
          backgroundColor:"white"
        }}></div>
        <h1 style={{
          color:"black",
          marginTop:"50px"
        }}>WE GOT YOU COVERED.., ANYDAY, ANYTIME...</h1>
      {/* <Wrap4 >
                            <Hold>
                            <IconA style={{
                                width:"100px",
                                height:"100px",
                                color:"white"
                            }}/>
                            <div style={{
                                "display":"flex",
                                "flex-direction":"column",
                            }}>
                            <h3 style={{
                              color:"white"
                            }}>Encompassing All Accessible Exclusive Medical Treatment</h3>
                            <p style={{
                              color:"white"
                            }}>We offer extensive medical procedures to outbound and inbound patients</p>
                            </div>
                            <PharmButton to='/pharm'  style={{
                                width:"200px",
                                height:"50px",
                                "background":"transparent",
                                margin: "10px",
                                border:"1px solid white",
                                cursor:"pointer",
                                color:"white",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                textDecoration:"none",
                            }}>Get In Touch</PharmButton>
                            </Hold>
                            <Footer>
                                <div>
                      <div>
                    <h3 style={{
                            color:"white",
                        }}>Departments</h3>
                        <div style={{
                             width: "125px",
                             height: "1px",
                             marginBottom:"20px",
                             backgroundColor: "silver"
                        }}></div>
                    </div>
                                <p>Neurology</p>
                                <p>Traumatology</p>
                                <p>Gynacology</p>
                                <p>Nephrology</p>
                                <p>Cardiology</p>
                                <p>Pulmonary</p>
                                </div>
                                
                                <div>
                                    
                      <div>
                      <h3 style={{
                            color:"white",
                        }}>Head Office</h3>
                        <div style={{
                             width: "125px",
                             height: "1px",
                             marginBottom:"20px",
                             backgroundColor: "silver"
                        }}></div>
                    </div>
                                <p>#4 Barr Ahmed Musa</p>
                                <p>Orege, Mechanic Bus stop</p>
                                <p>Opposite 1&2 Hotel</p>
                                <p>Nephrology</p>
                                <p>Cardiology</p>
                                <p>Pulmonary</p>
                                </div>

                                <div>  
                      <div>
                      <h3 style={{
                            color:"white",
                        }}>Quick Links</h3>
                        <div style={{
                             width: "125px",
                             height: "1px",
                             marginBottom:"20px",
                             backgroundColor: "silver"
                        }}></div>
                    </div>
                                <p>Home</p>
                                <p>Doctors</p>
                                <p>Departments</p>
                                <p>Pages</p>
                                <p>News</p>
                                <p>Register</p>
                                </div>

                                <div>
                                    
                      <div>
                      <h3 style={{
                            color:"white",
                        }}>Quick Links</h3>
                        <div style={{
                            width: "125px",
                            height: "1px",
                            marginBottom:"20px",
                            backgroundColor: "silver"
                        }}></div>
                    </div>
                    <p>Neurology</p>
                                <p>Traumatology</p>
                                <p>Gynacology</p>
                                <p>Nephrology</p>
                                <p>Cardiology</p>
                                <p>Pulmonary</p>
                                </div>

                            </Footer>
                      <Button style={{
                        color: "white"
                      }}>Have A Question? Ask US</Button>

                      </Wrap4> */}
              
       </Down>
    </Container>
  )
};

export default LandingPage;

const Logical = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const Body = styled.div``;
const Topic = styled.div``;


const Footer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    color: white;
`;

const Wrap4 = styled.div`
    width: 100%;
    background-color: #23456B;
    /* height: 100vh; */
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Hold = styled.div`
    width: 90%;
    height: 100px;
    background-color: red;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid silver;
    margin-top: 10px;
    /* align-items: center; */
`;

// const IconA = styled(GiCargoShip)``;

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-image: url('/bcme.jpg');
  /* background-color: #154C4A; */
  color: white;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 90%;
  /* height: 100vh; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20%;
  /* background-color: pink; */

`;
const TextHold = styled.div`
/* width: 400px; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  /* background-color: green; */
  text-align: center;
  line-height: 40px;
`
const MidWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  background-color: red;

`;

const ImageHold = styled.div`

`;
const Button = styled.div`
  width: 300px;
  height: 45px;
  font-size: 20px;
  font-weight: 600;
  font-family: Georgia, 'Times New Roman', Times, serif;
  /* border: 2px solid #57A5BC; */
  border-radius: 10px;
  /* background: transparent; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  text-decoration: none;
  color: black;
  border: 2px solid grey;

`;
const Call = styled.div`
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 800px;
  /* background-color: blue; */
`;
const Down = styled.div`
  width: 100%;
  /* height: 100vh; */
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const Cards = styled.div`
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  
  /* background-image: url(''); */
  /* background-color: blue; */
  margin-top: 30px;
  border-radius: 5px;
`;

