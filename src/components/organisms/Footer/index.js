import Navlinks from "../../molecules/Navlinks"
import Text from "../../atoms/Text";
import StyledFooter, { Container } from "./Footer.styled";

const Footer = () => (
  <>
    <StyledFooter>
      <Container>
        <span>
          <Text as='h1' $weight='600' size='md'>COVID ID</Text>
          <Text size='sm'>Developed by <span style={{ textDecoration: 'underline', fontWeight: '600' }}>Rakha Zahran Nurfirmansyah</span></Text>
        </span>
        <Navlinks highlight={false} />
      </Container>
    </StyledFooter>
  </>
);

export default Footer;
