import { css, styled } from "styled-components";

const schemes = {
    'primary': {
        background: ({ theme }) => theme.colors.primary,
        color: ({ theme }) => theme.colors.white,
        hover: {
            background: ({ theme }) => theme.colors.secondary,
            color: ({ theme }) => theme.colors.accent,
        }
    },
}

const sizes = {
    default: {
        padding: `12px 2rem`,
        font: ({ theme }) => theme.fontSize.default
    }
}

const Button = styled.button`
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
font-weight: 500;
text-decoration: none;
letter-spacing: 0.15rem;
transition: all 300ms linear;

${({ theme, $scheme, size, full }) => css`
background-color: ${schemes[$scheme]?.background || theme.colors.grey};
color: ${schemes[$scheme]?.color || theme.colors.dark};
padding: ${sizes[size]?.padding || sizes.default.padding};
font-size: ${sizes[size]?.font || sizes.default.font};

${full && css`
    display: block;
    width: 100%;
`}

&:hover {
    background-color: ${schemes[$scheme]?.hover.background};
    color: ${schemes[$scheme]?.hover.color};
}
`}
`

export default Button