
import React, { ReactElement } from "react";
import PermissionsContextProvider from "./providers/PermissionsContext";
import { BrowserRouter, Route } from "react-router-dom";
import error from "./pages/error";

import './assets/styles/main.scss';

const App = (): ReactElement => {

    return (
        <PermissionsContextProvider>
            <BrowserRouter>
                <Route path="/" errorElement={error()} />
            </BrowserRouter>
        </PermissionsContextProvider>
    )
}

export default App;