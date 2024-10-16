import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { ReactComponent as Logo} from '../assets/images/brand.svg';
import ProtectedContent from "./ProtectedContent";
import useScroll from "../hooks/useScroll";

export interface NavbarMainProps {
    links: {
        text: string,
        path: string,
        protectedOptions?: {
            criteria: number | {min: number, max: number},
            onlyAt?: boolean,
        }
    }[]
}

const NavbarMain = ({ links }: NavbarMainProps) => {
    const [scroll] = useScroll();
    const getSiteNav = (justify: string="end") => (
        <Nav style={{ flex: 1 }} className={`justify-content-${justify}`}>
            {links.map((link, index) => (
                link.protectedOptions ? (
                    <ProtectedContent hideOnly criteria={link.protectedOptions.criteria}>
                        <Nav.Item key={index}>
                            <Link to={link.path} className="nav-link fw-lighter">{link.text.toUpperCase()}</Link>
                        </Nav.Item>
                    </ProtectedContent>
                ) : (
                    <Nav.Item key={index}>
                        <Link to={link.path} className="nav-link fw-lighter">{link.text.toUpperCase()}</Link>
                    </Nav.Item>
                )
            ))}
        </Nav>
    )
    const getSocialMediaNav = (justify: string="start") => (
        <Nav style={{ flex: 1 }} className={`justify-content-${justify}`}>
            <Nav.Item className="d-grid justify-content-center align-items-center text-align-center">
                <a href="https://www.instagram.com/ringed_freak/" target="_blank" rel="noreferrer" className='socmed-link'><FontAwesomeIcon icon={faInstagram} className="socmed-link-image instagram" /></a>
            </Nav.Item>
            <Nav.Item className="d-grid justify-content-center align-items-center text-align-center">
                <a href="https://www.facebook.com/profile.php?id=100073382471096" target="_blank" rel="noreferrer" className='socmed-link'><FontAwesomeIcon icon={faFacebookF} className="socmed-link-image facebook" /></a>
            </Nav.Item>
        </Nav>
    )
    return (
        <Navbar className={`justify-content-center ${scroll[1] > 0 ? 'bg-white' : ''}`} collapseOnSelect sticky="top">
            <div className="d-flex justify-content-center align-items-center w-100">
                { getSiteNav() }
                <Navbar.Brand className="mx-3">
                    <Link to="/">
                        <Logo className={"navbar-brand-image"}/>
                    </Link>
                </Navbar.Brand>
                { getSocialMediaNav() }
            </div>
        </Navbar>
    )
}

export default NavbarMain;