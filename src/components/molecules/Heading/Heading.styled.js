import { styled } from "styled-components";

const StyledHeading = styled.div`
text-align: ${({ align }) => align || 'start'};
display: flex;
flex-direction: column;
justify-content: center;
align-items: stretch;
margin-bottom: 1.5rem;
`

export default StyledHeading