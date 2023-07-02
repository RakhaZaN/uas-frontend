import { useState } from "react";
import styles from "./styles.module.css"
import useWindowSize from "../../utils/hooks/useWindowSize"
import Navlinks from "../Navlinks";
import { HiBars3BottomRight, HiOutlineXMark } from 'react-icons/hi2'

const Navbar = () => {
  const { isMediumScreen } = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__container}>
          {/* Brand */}
          <h1 className={styles.navbar__brand}>COVID ID</h1>
          {isMediumScreen ? (
            <button
              className={styles.navbar__menu}
              onClick={toggleMenu}>{isOpen ? (<HiOutlineXMark />) : (<HiBars3BottomRight />)}</button>
          ) : (
            <Navlinks className={styles.navbar__expand} highlight={true} />
          )}
        </div>
        {isMediumScreen && (
          <Navlinks className={`${styles.navbar__items} ${isOpen ? styles.navbar__items_open : ''}`} setIsOpen={setIsOpen} />
        )}
      </div >
    </>
  )
};

export default Navbar;
