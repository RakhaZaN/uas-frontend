import navlinks from "../../../utils/constants/navlinks"
import { NavLink } from "react-router-dom"
import Navs from "./Navs.styled"

const Navlinks = ({ className, setIsOpen }) => {

    const handleNavlinkClick = () => {
        setIsOpen !== undefined && setIsOpen(false)
    }
    return (
        <Navs className={`${className}`}>
            {navlinks.map(navlink => (
                <NavLink
                    key={navlink.id}
                    to={navlink.link}
                    onClick={() => handleNavlinkClick(navlink.id)}>
                    {navlink.title}
                </NavLink>
            ))}
        </Navs>
    )
}

export default Navlinks