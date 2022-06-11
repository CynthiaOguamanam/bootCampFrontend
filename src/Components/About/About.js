import React from 'react';
import styled from 'styled-components';


const About = () =>{
  return(
    <Container>
      <Wrapper>
        <Up>
          <img style={{
            marginTop:"200px",
            marginLeft:"20px",
            borderRadius:"10px"
          }} src='/logo.jpg' alt=''/>
          <h1>PORT EXPRESS HANDLINGS LTD</h1>
          <h4>freight forwarding, import and export</h4>
          <h4>Apapa, Lagos</h4>
        </Up>
        <Texts>
          <h5  style={{
            width: "1000px",
            marginLeft:"450px",
            fontSize:"20px",
            marginTop:"200px",
          }}>
          We are one of the oldest indigenous shipping companies duly registered & licensed by the Nigeria Customs Service and the Nigerian Port Authority, to carry out maritime and allied business in Nigeria. Our expertise, range on shipping/ Export, Clearing & Forwarding. We are staffed with qualified men who are experienced in shipping, Export/Clearing business.
We are capable of handling shiploads of any cargo including the clearing of container/export operations/documentation, general cargo and tanker vessel at midstream or along side in any of the seaports in Nigeria & in the United Kingdom.
portexpress-2     is a partner company to PORT EXPRESS SERVICES LIMITED and is registered with the then NMA now known and called NIMASA as shipping company with Registration No. Rc. NMA/1087/1006/113A.
She has since been in business of vessel chartering along the coaster waters operating to Apapa Port before the port reforms which brought about concession.
We are experts  in Export/Shipping, Clearing, Bonded Warehousing and we are focused, position in documentations and handling of cargo/containers. We have trained and re-trained staff from our sister company on board, well experienced in the operations and management level, thereby creating a good opportunities for her staffs to excel in the terminal and maritime industry.However, her sister company had grown over the years…1978 to the top largest terminals granted license by the Nigeria Customs Service.
More also, we have PORT EXPRESS SERVICES UK LIMITED incorporated in 2008.Registered as a consolidator in London with Rc.06728662. We are accessible from all over our UK office at Unit 19, Red bridge Ent. Centre, Thomason Close Ilford, Essel Igi Ity, London.
  Port express Handlings Ltd  has a HAULAGE DEPARTMENT and has sound Mack Trucks for safe delivery of cargoes. Apart from that, she has a sister company known and called  LANKO HAULAGE NIGERIA .LIMITED. 
          </h5>
          <div style={{
          width:"400px",
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          marginRight:"120px"
        }}>
          <h5>Industries</h5>
          <h5>Import and Export</h5>
        </div>
          <div style={{
          width:"400px",
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          marginRight:"120px"
        }}>
          <h5>Company Size</h5>
          <h5>1-10 Employees</h5>
        </div>
          <div style={{
          width:"400px",
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          marginRight:"120px"
        }}>
          <h5>Headquarter</h5>
          <h5>Apapa, Lagos</h5>
        </div>
          <div style={{
          width:"400px",
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          marginRight:"120px"
        }}>
          <h5>Type</h5>
          <h5>Privately held</h5>
        </div>
        <br></br>
        <br></br>
        <h5 style={{
          marginRight:"480px"
        }}>Location:</h5>
        <h5 style={{
          width: "300px",
          marginRight:"220px"
        }}>1 COMMERCIAL ROAD 1 ST FLOOR ARIS BLOCK, ELEGANZA PLAZA, APAPA LAGOS.NIGERIA.

        1st floor, Aris Block

        Apapa, LAGOS 
        </h5>
        <div style={{
          width: "100%",
          height: "2px"
        }}></div>
        <ProfileDiv>
          <Img src='/ceo.jpg' alt=''/>
       <div style={{
          marginLeft: "300px",
        //  backgroundColor:"red",

       }}>
       <Bio> Ceo Port Express Handlings Ltd.. </Bio>
          <h5>Shipping specialist at import and export, freight forwarding... A complete transport solution for you. Your goods arrive on time! finally on Port Express Handlings Ltd you can trust.</h5>
          <h4>Call free: 09022647731</h4>
            <h4 >portexpresshandlings@yahoo.com</h4>
       </div>
        </ProfileDiv>
        <Social>
          <img style={{
          marginRight:"180px"
          }}src='/icn.jpg' alt='fb'/>
        </Social>
        </Texts>
      </Wrapper>
    </Container>
  )
};

export default About;

const Img = styled.img`
  width: 100%;
`;


const ProfileDiv = styled.div`
  width: 400px;
  object-fit: cover;
  /* background-color: aqua; */
  height: 400px;
  margin-right: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Bio = styled.div`
  width: 500px;
  font-size: 30px;
  font-weight: 600;
  font-family: Georgia, 'Times New Roman', Times, serif;
`
const Texts = styled.div`
width: 900px;
height: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 700px;
margin-right: 740px;

`;

const Container = styled.div`
  /* background-color: green; */
  height: 100vh;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  /* background-color: yellow; */
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Up = styled.div`
width: 80%;
height: 300px;
background-image: url("/wall.jpg");
background-repeat: no-repeat;
background-size: contain;
margin-bottom: 300px;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Social = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin-left: 30px;

  style{
  width: 100px;
  height: 100px;
  }
`;