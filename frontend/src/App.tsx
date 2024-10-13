
import React, { ReactElement } from "react";
import PermissionsContextProvider from "./providers/PermissionsContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error";

import './assets/styles/main.scss';
import Landing from "./pages/Landing";

const App = (): ReactElement => {

    return (
        <PermissionsContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} errorElement={<ErrorPage />} />
                    <Route path="/error" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </PermissionsContextProvider>
    )
}

export default App;