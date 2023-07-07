import { css, styled } from "styled-components";

const displays = {
    'flex-center-center': {
        display: 'flex',
        items: 'center',
        content: 'center'
    },
    'flex-start-center': {
        display: 'flex',
        items: 'flex-start',
        content: 'center'
    },
    'flex-center-between': {
        display: 'flex',
        items: 'center',
        content: 'space-between'
    },
    'flex-stretch-center': {
        display: 'flex',
        items: 'stretch',
        content: 'center'
    },
}

const Container = styled.div`
width: 88%;
max-width: 1440px;
margin: 0 auto;
padding: 10vh 0;
gap: 1rem;

${({ display, direction }) => css`
${display && css`
display: ${displays[display]?.display};
align-items: ${displays[display]?.items};
justify-content: ${displays[display]?.content};
`}

${direction && css`
flex-direction: ${() => direction || 'row'};
`}

@media screen and (max-width: 768px) {
    flex-direction: column;
    row-gap: 2em;

    > * {
        flex-basis: 100%;
    }
}
`}
`

export const Side = styled.div`
@media screen and (min-width: 768px) {
    flex-grow: ${({ $growMd }) => $growMd || 0};
    flex-shrink: ${({ $shrinkMd }) => $shrinkMd || 0};
    flex-basis: ${({ $basisMd }) => $basisMd || 'auto'};
}
`

export default Container