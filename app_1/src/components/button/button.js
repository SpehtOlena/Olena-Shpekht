import styled from "styled-components";

const Button = styled.button`
	background-color: ${props => props.primary ? '#F86507' : '#F8A607'};
	color: ${props => props.primary ? 'red' : '#FFFFFF'};
	text-aling: center;
	font-family: Poppins, serif;
	font-size: 24px;
	padding: 18px 46px;
	border: none;
	border-radius: 7px;
	cursor: pointer;
	&:hover {
		background-color: #F86507;
		transition: all 0.3s ease 0s;
	}
`



export default Button;