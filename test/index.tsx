import {SimpleLink, SubMenuCollection} from "../index.js";
import React, {useState} from "react";
import ReactDOM from "react-dom/client";
import {settings} from "./settings";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = (props: any) => {

    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<SimpleLink to="#" isOpenNewTab>hello</SimpleLink>} />
            </Routes>
            
        </BrowserRouter>
    );
};

const target = document.querySelector("#root");
const root = ReactDOM.createRoot(target);
root.render(<App />);