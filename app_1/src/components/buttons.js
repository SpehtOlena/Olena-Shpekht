import styled from "styled-components";

const Button = styled.button`
	background-color: ${props => props.primary ? 'green' : 'red'};
	color: ${props => props.primary ? 'red' : 'green'};
	text-aling: center;
	font-size: 38px;
	font-weight: bold;
`

export default Button;