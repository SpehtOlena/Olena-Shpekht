import styled from "styled-components";

const Button = styled.button`
	background-color: ${props => props.search ? '#FF8888' : '#F8A607'};
	color: #FFFFFF;
	text-align: center;
	font-family: Poppins, serif;
	font-size: ${props => props.primary ? '16px' : '24px'};
	padding: 18px 46px;
	border: none;
	border-radius: ${props => props.primary ? '0px' : '7px'};
	cursor: pointer;
	&:hover {
		background-color: #F86507;
		transition: all 0.3s ease 0s;
	}
`



export default Button;