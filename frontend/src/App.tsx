
import { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-regular-svg-icons";

import Landing from "./pages/Landing";
import NavbarMain from "./components/NavbarMain";
import PermissionsContextProvider from "./providers/PermissionsContext";
import ErrorPage from "./pages/error";

import './assets/styles/main.scss';
import { ParallaxProvider } from "react-scroll-parallax";

const viewportLimit = 'md'

const App = (): ReactElement => {
    return (
        <>
        <div className={`d-${viewportLimit}-block d-none`}>
            <PermissionsContextProvider>
                <BrowserRouter>
                    <NavbarMain links={
                        [
                            {
                                text: 'Resume',
                                path: '/resume',
                            },
                            {
                                text: 'Dashboard',
                                path: '/dashboard',
                                protectedOptions: {
                                    criteria: {min: 0, max: 3},
                                }
                            },
                            {
                                text: 'Admin Dashboard ',
                                path: '/admin',
                                protectedOptions: {
                                    criteria: 3,
                                    onlyAt: true,
                                }
                            }
                        ]
                    } />
                    <ParallaxProvider>
                        <Routes>
                            <Route path="/" element={<Landing />} errorElement={<ErrorPage />} />
                            <Route path="/error" element={<ErrorPage />} />
                        </Routes>
                    </ParallaxProvider>
                </BrowserRouter>
            </PermissionsContextProvider>
        </div>
        <div className={`d-${viewportLimit}-none d-flex flex-column justify-content-center align-items-center w-100 vh-100 gy-0`}>
            <h1 style={{color: "rgb(80, 80, 80)"}}>We're sorry! <FontAwesomeIcon icon={faFrown}/></h1>
            <p style={{width:"350px", fontSize: "12px", color: "rgb(120, 120, 120)"}}>
                We regret to inform you that our application does not currently support screen or viewport sizes with dimensions less than 768 pixels.
            </p>
            <p style={{width:"350px", fontSize: "12px", color: "rgb(120, 120, 120)"}}>
                We apologize for any inconvenience this may cause and appreciate your understanding.
            </p>
        </div>
        </>
    )
}

export default App;