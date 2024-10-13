
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppConfig from "./assets/config.json"

// GLOBAL VARIABLES
process.env.REACT_APP_API_URL  = AppConfig["REACT_APP_API_URL"];

const root = createRoot(document.getElementById('root')!);
root.render(<App />);