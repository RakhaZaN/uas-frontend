import { styled } from "styled-components";

const StyledSituationCards = styled.div`
background-color: ${({ theme }) => theme.colors.light};
`

export const Cards = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
justify-content: center;
align-items: center;
gap: 2em;

@media screen and (max-width: 768px) {
    > * {
        flex-grow: 1;
    }
}
`

export default StyledSituationCards