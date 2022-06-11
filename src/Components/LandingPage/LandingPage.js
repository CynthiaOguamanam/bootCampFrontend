import React, {useEffect} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {GiCargoShip} from 'react-icons/gi';



const Home = ({bg}) =>{

  useEffect(() => {
    AOS.init({duration:3000})
}, []);
  
    return(
        <Container>
            <Wrapper>
            <Wrap >
                   <Texts data-aos="flip-right">
                       <div style={{
                        lineHeight: "50px",
                       }}>
                       <h1 >PORT EXPRESS HANDLINGS Ltd</h1>
                          <h2 style={{
                              textAlign:"center",
              fontFamily:"poppins",
            }}>A Shipping Company for your freight-forwarding,  Import And Export. We ensure your goods., perishable and non-perishable are transported to it's destination, stored in a conducive warehouse and as quick as possible</h2>
                <h3  style={{
            }}>A complete transport solution for you</h3>
            <Button4 to='/about'>About Us</Button4>
                       </div>
                   </Texts>
                   {/* <div style={{
                       
                   }}>
                    </div> */}
               </Wrap>
               <NewHolder>
               <div>
                   <h1 style={{
                           color:"black",
                       }}>The Logical Difference</h1>
                   </div>
                   <Next>
                   <div>
                   <h4 style={{
                           color:"black",
                       }}>Efficiency</h4>
                       <div style={{
                           width: "100px",
                           height: "2px",
                           marginBottom:"20px",
                           backgroundColor: "silver"
                       }}></div>
                   </div>
                   <div>
                   <h4 style={{
                           color:"black",
                       }}>Reliability</h4>
                       <div style={{
                           width: "100px",
                           height: "2px",
                           marginBottom:"20px",
                           backgroundColor: "silver"
                       }}></div>
                   </div>
                   <div>
                   <h4 style={{
                           color:"black",
                       }}>Transparency</h4>
                       <div style={{
                           width: "100px",
                           height: "2px",
                           marginBottom:"20px",
                           backgroundColor: "silver"
                       }}></div>
                   </div>
                   </Next>
                   <New>
                     <h2>Your goods arrive on time! finally on Port Express Handlings Ltd you can trust </h2>
                       <p style={{
                        lineHeight: "40px",
                        width: "100%",
                        // color:"#888F94",
                        fontSize:"20px",
                        fontSize:"20px"
                    }}>Progressively generate synergetic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities. Progressively generate synergetic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.
                       Progressively generate synergetic total linkage through cross-media intellectual capital. Enthusiastically parallel task team building without standards compliant initiatives. Progressively monetize client-centric outsourcing with excellent communities.</p>
                   </New>
               </NewHolder>
               <Wrap2>
                   <div>
                   <h1 style={{
                           color:"black",
                       }}>Our Services</h1>
                       <div style={{
                           width: "100px",
                           height: "2px",
                           marginBottom:"20px",
                           backgroundColor: "silver"
                       }}></div>
                   </div>
                   <CardHold>
                       <Div style={{
                           width: "100%",
                        //    height: "400px",
                          //  backgroundColor: "tomato",
                           display: "flex",
                           justifyContent: "space-between",
                           alignItems: "center",
                       }}>
                        <CardDiv1></CardDiv1>
                        <CardDiv2>
                        </CardDiv2>
                        <CardDiv3 ></CardDiv3>
                        <CardDiv4></CardDiv4>
                       </Div>
                       <Div style={{
                           width: "100%",
                        //    backgroundColor: "tomato",
                           display: "flex",
                           justifyContent: "space-between",
                           alignItems: "center",
                       }}>
                        <CardDiv5></CardDiv5>
                        <CardDiv6></CardDiv6>
                        <CardDiv7></CardDiv7>
                        <CardDiv8></CardDiv8>
                       </Div>
                       <Button2 to='/more'>See More</Button2>
                   </CardHold>
               </Wrap2>
               <Wrap3 style={{
                        //   "margin-top":"100px"
                }}>
                      <div>
                    <h1 style={{
                            color:"black",
                        }}>Meet Our Partners</h1>
                        <p style={{
                            width: "100px",
                            height: "2px",
                            marginBottom:"20px",
                            backgroundColor: "#5699AE"
                        }}></p>
                    </div>
                    <div style={{
                           lineHeight: "20px",
                           width: "60%",
                           color:"#888F94",
                           fontSize:"20px"
                       }}>Your goods arrive on time! finally on Port Express Handlings Ltd you can trust. Your goods arrive on time! finally on Port Express Handlings Ltd you can trust. Our Partners are not only local but international companies. </div>
                       
                       <CertDiv>
                           <Cert src='/l.jpg' alt=''/>
                           <Cert src='/l8.jpg' alt=''/>
                           <Cert  src='/l4.jpg' alt=''/>
                           <Cert src='/l6.jpg' alt=''/>
                           <Cert src='/l7.jpg' alt=''/>
                       </CertDiv>
                 </Wrap3>   
              <Rev>
              <h1 style={{
                      marginLeft:"40px",
                    }}>Clients Review</h1>     
              <Review>
                    <Box>
                    <Up>
                        As the number of mobile users continue to outspace the number of desktop users, it should go without saying designers  now have to design on mobile first mentally
                    </Up>
                    <Down>
                        <Image></Image>
                        <div>
                        <View>John Doe</View>
                        <View>Designer</View>
                        </div>
                    </Down>
                    </Box>
                    <Box>
                    <Up>
                        As the number of mobile users continue to outspace the number of desktop users, it should go without saying designers  now have to design on mobile first mentally
                    </Up>
                    <Down>
                        <Image></Image>
                        <div>
                        <View>John Doe</View>
                        <View>Designer</View>
                        </div>
                    </Down>
                    </Box>
                    <Box>
                    <Up>
                        As the number of mobile users continue to outspace the number of desktop users, it should go without saying designers  now have to design on mobile first mentally
                    </Up>
                    <Down>
                        <Image></Image>
                        <div>
                        <View>John Doe</View>
                        <View>Designer</View>
                        </div>
                    </Down>
                    </Box>
                    <Box>
                    <Up>
                        As the number of mobile users continue to outspace the number of desktop users, it should go without saying designers  now have to design on mobile first mentally
                    </Up>
                    <Down>
                        <Image></Image>
                        <div>
                        <View>John Doe</View>
                        <View>Designer</View>
                        </div>
                    </Down>
                    </Box>
              </Review>
              </Rev>
                      <Wrap4 >
                            <Hold>
                                <Ship/>
                            <div style={{
                                "display":"flex",
                                "flex-direction":"column",
                            }}>
                            <h3 style={{
                              color:"white",
                              textAlign:"center",
                            }}>Encompassing All Accessible Exclusive Medical Treatment</h3>
                            <p style={{
                              color:"white"
                            }}>We offer extensive medical procedures to outbound and inbound patients</p>
                            </div>
                            <PharmButton  style={{
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
                            }}>  <a style={{
                                textDecoration:"none",
                                color:"white"
                            }} href='https://chat.whatsapp.com/EgTn0OhZeUE1WHSbWZYcwk'>Get In Touch</a></PharmButton>
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
                                <p>Terminal</p>
                                <p>Land Transport</p>
                                <p>Terminal</p>
                                <p>Sea Transport</p>
                                <p>Office</p>
                                <p>Air Transport</p>
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
                                <p>#1 Commercial Road</p>
                                <p>Eleganza Plaza</p>
                                <p>Opposite Union Bank</p>
                                <p>Apapa Lagos</p>
                                <p>Nigeria</p>
                                <p>Office</p>
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
                                <p>Employees</p>
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
                    <p>FAQ's</p>
                                <p>Home</p>
                                <p>About</p>
                                <p>Services</p>
                                <p>More</p>
                                <p><a  style={{
                                    textDecoration:"none",
                                    color:"white"
                                }} href='https://mail.google.com/mail/u/0/?q=facebook#inbox'>Email Us</a></p>
                                </div>

                            </Footer>
                      <Button style={{
                        color: "white"
                      }}> </Button>

                      </Wrap4>
            </Wrapper>
        </Container>
    )
}

export default Home;

    const Rev = styled.div`
    width: 100%;
    height: auto;
    margin-top: 100px;
`;

const Ship = styled(GiCargoShip)`
    width: 100px;
    height: 100px;
    color: white;
    margin-left: 10px;
`;

const View = styled.div``;
const Image = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url('/av.jpg');
    background-size: cover;
    margin-bottom: 10px;
`;

const Box = styled.div`
    width: 20%;
    height: auto;
    color: white;
    border-radius: 5px;
    padding: 20px 12px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    margin: 30px;
    /* text-align: center; */
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        width: 90%;
        flex-direction: column;
    }

`;
const Up = styled.div`
    /* width: 300px; */
    margin-right: 10px;
    color: black;

`;
const Down = styled.div`
    width: 300px;
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    /* align-items: center; */
`;

const Review = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media Screen and (max-width: 768px){
        flex-direction: column;
    }

`;
const New = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Next = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NewHolder = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    /* padding-top: 100px; */
    
   @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 600px;
    }

`;
const PharmButton = styled.div`
    @media Screen and (max-width: 768px){
        padding: 10px 10px;
    }
`;
const Button3 = styled(Link)`
    width: 150px;
    height: 40px;
    background-color: #5698ad;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 15px;
    color: white;
`;
const CardDiv1 = styled.div`
    width: 350px;
    height: 200px;
    background-image: url('/port4.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;
const CardDiv2 = styled.div`
    width: 350px;
    height: 200px;
    background-image: url('/port.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;
const CardDiv3 = styled.div`
    width: 350px;
    height: 200px;
    background-image: url('/sh.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;
const CardDiv4 = styled.div`
    width: 350px;
    height: 200px;
    background-image: url('/port.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;
const CardDiv5 = styled.div`
    width: 350px;
    height: 200px;
    background-image: url('/ship img.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;
const CardDiv6 = styled.div`
    width: 350px;
    height: 200px;
    background-image: url('/s2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;
const CardDiv7 = styled.div`
    width: 350px;
    height: 200px;
    background-image: url('/shi.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;
const CardDiv8 = styled.div`
    width: 350px;
    height: 200px;
    background-image: url('/ss.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    /* justify-content: center; */
`;

const Two = styled.div`
    margin-bottom: 10px;
    margin-left: 10px;
    width: 300px;
    height: 30px;
    /* background-color: red; */
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Footer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* flex-direction: column; */
    color: white;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 150px;
    }
`;

const Wrap4 = styled.div`
    width: 100%;
    background-color: #5699AE;
    min-height: 100vh;
    /* margin-top: 50px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        background-color: #5699AE;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;
const Hold = styled.div`
    width: 90%;
    height: 200px;
    /* background-color: red; */
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid silver;
    /* align-items: center; */

    @media (max-width: 768px) {
        /* background-color: #5699AE; */
        flex-direction: column;
        justify-content: center;
        padding: 40px 5px;
        margin-top:30px;


    }

`;

const CertDiv = styled.div`
       width:100%;
       display:flex;
       justify-content:space-between;
       align-items:center;
       /* background-color:yellow; */
       margin-top: 50px;
       flex-wrap: wrap;

       @media screen and (max-width: 768px){
           justify-content: center;
       }
`;

const Cert = styled.img`
    width: 250px;
    height: 200px;
    background-color: aqua;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;


const Button2 = styled(Link)`
    width: 300px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #5699AE;
    margin-top: 40px;
    border-radius: 10px;
    color: white;
    font-size: 20px ;
    text-decoration: none;
`;

const Wrap3 = styled.div`
     width: 90%;
     min-height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     flex-wrap: wrap;
     text-align: center;

     @media screen and (max-width:768px){
         text-align: center;

         p{
             display: none;
         }
     }
     
`;

const Div = styled.div`
    width: 100%;
    margin-bottom: 30px;
    min-height: 100%;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Button4 = styled(Link)`
  width: 300px;
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  /* border: 2px solid #57A5BC; */
  border-radius: 10px;
  /* background: transparent; */
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: transparent;
  text-decoration: none;
  color: white;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 570px;

  :hover{
        cursor: pointer;
        margin-left: 200px;
    }

    @media screen and (max-width: 768px){
        width: 200px;
        margin-left: 50px;
        margin-bottom: 150px;
        /* padding-top: 400px; */

    }

`;
const Button = styled.div`

    :hover{
        cursor: pointer
    }
`;
const Button1 = styled(Link)``;

const Container = styled.div`
    width: 100%;
    font-family: "poppins";
    /* min-height: 100vh; */
    /* background-color: white; */
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;
const Wrapper = styled.div`
    width: 100%;
    font-family: poppins;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    /* background-color: red; */
`;
const Head = styled.div`
    width: 100%;
    padding-top: 200px;
    padding-bottom: 50px;
    height: 200px;
    background-color: #5699AE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 0%;

    @media (max-width: 768px) {
        /* display: flex; */
        
    }

`;
const Wrap = styled.div`
    width: 100%;
    background-image: url('/bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    padding-top: 100px;
    
   @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* margin-top: 10px; */
        padding-top: 200px;
    }

`;
const Texts = styled.div`
    width: 90%;
    height: 500px;
    text-align: center;
    font-family: poppins;
    /* background-color: yellow; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    color: white;
    h1{
       font-size:55px;
        /* font-family:Georgia */
    }
    h2{
        font-size: 20px;
    font-family: poppins;
    }
    h3{
        font-size: 15px;
    }
                      


    @media screen and (max-width: 768px){
        text-align: left;
        h1{
            font-size: 23px;
        }
    }
`;
const Wrap2 = styled.div`
    width: 90%;
    min-height: 100vh;
    /* background-color: red; */
    @media Screen and (max-width: 768px) {
       display: flex;
       flex-direction: column;
       justify-content: center;
       /* align-items: center; */
       margin-top: 500px;
   };
`;

const CardHold = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
   /* @media (max-width: 768px) {
       flex-direction: column;
   } */
    
`;
const Card = styled.div`
    width: 300px;
    height: 350px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: white;
    margin-top: 10px;
    border-radius: 10px;
    /* object-fit: cover; */
    /* margin-bottom: 30px; */

`;
const Card1 = styled.div`
    width: 300px;
    height: 450px;
    margin-top: 30px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    background-color: white;
    border-radius: 10px;
`;