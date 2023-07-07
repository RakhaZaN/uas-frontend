import { styled } from "styled-components";

const Navs = styled.nav`
display: flex;
flex-direction: ${({ direction }) => direction || 'row'};

&.mobile {
    width: 88%;
    margin: 0 auto;
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-height: 0;
    overflow: hidden;
    -webkit-transition: max-height 1s ease-in, padding-bottom 200ms ease-in 0.5s;
    -moz-transition: max-height 1s ease-in, padding-bottom 200ms ease-in 0.5s;
    -ms-transition: max-height 1s ease-in, padding-bottom 200ms ease-in 0.5s;
    -o-transition: max-height 1s ease-in, padding-bottom 200ms ease-in 0.5s;
    transition: max-height 1s ease-in, padding-bottom 200ms ease-in 0.5s;

    &.open {
        max-height: 30vh;
        padding-bottom: 1rem;
    }
}

a {
    padding: 4px 12px;
    color: inherit;
    transition: all 300ms ease-in-out;
    
    &.active {
        border-bottom: solid 1px ${({ theme }) => theme.colors.accent};
    }

    &::after {
        display:block;
        content: '';
        border-bottom: solid 1px ${({ theme }) => theme.colors.white};  
        transform: scaleX(0);  
        transition: transform 300ms ease-in-out;
        
    }

    &:hover {
        color: ${({ theme }) => theme.colors.secondary};

        &::after {
            transform: scaleX(1);
        }
    }

}
`

export default Navs