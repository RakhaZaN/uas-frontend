import { useState } from "react"
import navlinks from "./navlinks"
import styles from "./styles.module.css"

const Navlinks = ({ className, setIsOpen, highlight = true }) => {
    const [isActive, setIsActive] = useState('Global')

    const handleNavlinkClick = (title) => {
        setIsActive(title)
        setIsOpen !== undefined && setIsOpen(false)
    }
    return (
        <nav className={`${className}`}>
            {navlinks.map(navlink => (
                <a
                    key={navlink.title}
                    href={navlink.link}
                    className={`${styles.navlink} ${highlight && isActive === navlink.title ? styles.active : ''}`}
                    onClick={() => handleNavlinkClick(navlink.title)}>
                    {navlink.title}
                </a>
            ))}
        </nav>
    )
}

export default Navlinks