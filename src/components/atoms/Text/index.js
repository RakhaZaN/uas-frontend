import { css, styled } from "styled-components";

const Text = styled.p`
${({ theme, color, size, $weight, $align }) => css`
color: ${theme.colors[color] || 'inherit'};
font-size: ${theme.fontSize[size] || theme.fontSize.default};
text-align: ${$align || 'start'};

${$weight && css`
font-weight: ${$weight};
`}
`}
`

export default Text