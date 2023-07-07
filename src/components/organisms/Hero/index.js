import medicare from "../../../assets/medical-care.svg";
import Button from "../../atoms/Button";
import Container from "../../atoms/Container";
import Heading from "../../molecules/Heading";
import Text from "../../atoms/Text";
import StyledHero from "./Hero.styled";

const Left = () => (
  <div className="left">
    <Heading title='COVID ID' subtitle='Monitoring Perkembangan Covid' />
    <Text color='grey'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, temporibus harum consectetur quod laudantium impedit quaerat sint asperiores magnam officiis quis tempore vero quae provident.</Text>
    <Button $scheme="primary" style={{ marginTop: '2em' }}>Vaccine</Button>
  </div>
)

const Right = () => (
  <div className="right">
    <img src={medicare} alt="Medical Care Ilustration" />
  </div>
)

const Hero = () => (
  <>
    <StyledHero id="hero">
      <Container display='flex-center-between'>
        <Left />
        <Right />
      </Container>
    </StyledHero>
  </>
);

export default Hero;
