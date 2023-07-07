import { styled } from "styled-components";

const StyledByRegion = styled.div``

export const Cards = styled.div`
display:  grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: 2em;
`

export const StyledStatus = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 1em;
`

export default StyledByRegion