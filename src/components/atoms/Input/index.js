import { styled } from "styled-components";

const Input = styled.input`
width: 100%;
padding: 12px;
border: 2px solid ${({ theme }) => theme.colors.grey};
border-radius: 8px;
outline: none;
font-size: inherit;

&:focus {
border-color: ${({ theme }) => theme.colors.primary};
}

&.error {
    border-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.danger};
}
`

export default Input