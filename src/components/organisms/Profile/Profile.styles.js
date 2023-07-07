import { styled } from "styled-components";

const StyledProfile = styled.div`
img {
    width: 100%;
    height: 100%;
    max-height: 50vh;
    border-top-left-radius: 12rem;
    border-bottom-right-radius: 12rem;
    object-fit: cover;
    object-position: bottom;
    position: relative;

    &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translate(10px, 10px);
        border: 2px solid ${({ theme }) => theme.colors.primary};
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: translate(-50%, -50%);
    }
}

.sosmed {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;

    a {
        padding: 4px 12px;
        border-radius: 20px;
        background-color: ${({ theme }) => theme.colors.light};
        color: ${({ theme }) => theme.colors.accent};
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 4px;
    }
}
`

export default StyledProfile