import { styled } from "styled-components";

const Table = styled.table`
margin: 0 auto;
width: max-content;
height: auto;
border-collapse: collapse;

&, tr {
    border: 1px solid ${({ theme }) => theme.colors.dark};

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colors.light};
    }
}

th, td {
    border: none;
    padding: 1em 2em;
}

th {
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.secondary};
}
`

export default Table