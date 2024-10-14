
import React, { ReactElement } from "react";
import PermissionsContextProvider from "./providers/PermissionsContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error";

import './assets/styles/main.scss';
import Landing from "./pages/Landing";
import NavbarMain from "./components/NavbarMain";

const App = (): ReactElement => {

    return (
        <PermissionsContextProvider>
            <BrowserRouter>
                <NavbarMain links={
                    [
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
                <Routes>
                    <Route path="/" element={<Landing />} errorElement={<ErrorPage />} />
                    <Route path="/error" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </PermissionsContextProvider>
    )
}

export default App;