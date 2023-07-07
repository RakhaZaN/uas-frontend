import { styled } from "styled-components";

const StyledFooter = styled.footer`
width: 100%;
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.white};

nav a.active, nav a::after {
    border: none;
}
`

export const Container = styled.div`
width: 88%;
margin: 0 auto;
padding: 2em 0;
display: flex;
flex-direction: column;
gap: 2em;

@media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
`

export default StyledFooter