import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

import { ReactComponent as Logo} from '../assets/images/brand.svg';
import ProtectedContent from "./ProtectedContent";

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

    return (
        <Navbar className="justify-content-between">
            <Nav>
                {links.map((link, index) => (
                    <Nav.Item key={index}>
                        {link.protectedOptions ? (
                            <ProtectedContent hideOnly criteria={link.protectedOptions.criteria}>
                                <Link to={link.path} className="nav-link">{link.text}</Link>
                            </ProtectedContent>
                        ) : (
                            <Link to={link.path} className="nav-link">{link.text}</Link>
                        )}
                    </Nav.Item>
                ))}
            </Nav>
            <Navbar.Brand>
                <Link to="/">
                    <Logo className={""}/>
                </Link>
            </Navbar.Brand>
        </Navbar>
    )
}

export default NavbarMain;