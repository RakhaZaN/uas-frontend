import { styled } from "styled-components";

const NavbarStyled = styled.div`
width: 100%;
background-color: ${({ theme }) => theme.colors.primary};
color: white;
`

export const Container = styled.div`
width: 88%;
margin: 0 auto;
padding: 18px 0;
display: flex;
justify-content: space-between;
align-items: center;
`

export const MenuToggle = styled.button`
color: white;
font-size: 1.15rem;
background-color: transparent;
border: none;
padding: 4px 6px 1px;
border-radius: 4px;
transition: all 200ms ease-in;

&:hover {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.secondary};
}
`

export default NavbarStyled