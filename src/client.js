import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./ui/App";

hydrateRoot(
    document,
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
