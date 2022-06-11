import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from "axios";


const FormPage = () => {
	const [data, setData] = useState()

	const getData = async() =>{
		
	const url = "http://localhost:2003/api/get/getall";

	const res = await axios.get(url)
	setData(res.data.data)
	}
useEffect(()=>{
	getData()
}, [])
	
  return (
	<Container>
		<Wrapper>
			{
				data?.map((props)=>(
					<Card key= {props._id}>
				<Name>{props.username}</Name>
				<Email>{props.email}</Email>
				<Number>{props.number}</Number>
				<Message>{props.message}</Message>
			</Card>
				))
			}
		</Wrapper>
	</Container>
  )
}

export default FormPage;

const Name = styled.div`
	width: 80%;
	height: 20px;
	font-weight: bold;
	border-bottom: 1px solid silver;
	/* background-color: orange; */
`;
const Email = styled.div`
	width: 80%;
	height: 20px;
	border-bottom: 1px solid silver;
	font-style: italic;
	color:"#5699AE";
	/* background-color: green; */
`;
const Number = styled.div`
	width: 80%;
	height: 20px;
	font-weight: bold;
	border-bottom: 1px solid silver;

	/* background-color: blue; */
`;
const Message = styled.div`
	width: 80%;
	height: 100px;
	border: 1px solid silver;
	margin-top: 10px;
	font-weight: bold;
	/* background-color: red; */
`;

const Container = styled.div`
	width: 100%;
	height: auto;
	display: flex;
	/* align-items: center; */
	justify-content: center;
	/* background-color: red; */

	@media screen and (max-width: 768px){
		
	}
`;
const Wrapper = styled.div`
	width: 96%;
	height: auto;
	margin-top: 120px;
	/* padding-top: 200px; */
	display: flex;
	flex-wrap: wrap;
	/* background-color: aqua; */

	@media screen and (max-width: 768px){
        width: 100%;
	}
`;
const Card = styled.div`
	width: 300px;
	height: 300px;
	border-radius: 5px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 20px;
	/* box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px; */



	@media screen and (max-width: 768px){
        width: 90%;
	}
`;