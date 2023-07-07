import { styled } from "styled-components";

const StyledHero = styled.div`
img {
    width: 100%;
}

@media screen and (min-width: 768px) {
    .left {
        flex: 0 1 40%;
    }

    .right {
        flex: 0 1 50%;
    }
}
`

export default StyledHero