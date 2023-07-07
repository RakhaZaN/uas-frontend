import { useState } from "react";
import useWindowSize from "../../../utils/hooks/useWindowSize"
import Navlinks from "../../molecules/Navlinks";
import { HiBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2'
import NavbarStyled, { Container, MenuToggle } from "./Navbar.styled";
import Text from "../../atoms/Text";

const Navbar = () => {
  const { isMediumScreen } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <NavbarStyled>
        <Container>
          {/* Brand */}
          <Text as='h1' $weight='600' size='lg'>COVID ID</Text>
          {isMediumScreen ? (
            <MenuToggle onClick={toggleMenu}>
              {isOpen ? (<HiOutlineXMark />) : (<HiBars3BottomRight />)}
            </MenuToggle>
          ) : (
            <Navlinks />
          )}
        </Container>
        {isMediumScreen && (
          <Navlinks className={`mobile ${isOpen ? 'open' : ''}`} setIsOpen={setIsOpen} />
        )}
      </NavbarStyled>
    </>
  )
};

export default Navbar;
