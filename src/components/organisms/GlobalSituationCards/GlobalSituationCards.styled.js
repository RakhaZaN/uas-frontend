import { styled } from "styled-components";

const StyledGlobalSituationCards = styled.div`
background-color: ${({ theme }) => theme.colors.light};
`

export const Cards = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 2em;

@media screen and (max-width: 768px) {
    > * {
        flex-grow: 1;
    }
}
`

export default StyledGlobalSituationCards