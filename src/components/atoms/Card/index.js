import { styled } from "styled-components";

const Card = styled.div`
padding: 3em 2.5em;
background-color: ${({ theme }) => theme.colors.white};
border-radius: 12px;
box-shadow: 0px 3px 10px 2px rgba(98, 98, 98, 0.2);
  -webkit-box-shadow: 0px 3px 10px 2px rgba(98, 98, 98, 0.2);
  -moz-box-shadow: 0px 3px 10px 2px rgba(98, 98, 98, 0.2);
`

export default Card