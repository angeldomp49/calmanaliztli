import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SimpleLink} from "../index";

const App = (props: any) => {

    return(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="test" index element={
                        <SimpleLink>home</SimpleLink>
                    } />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
};


const target = document.querySelector("#root");
const root = ReactDOM.createRoot(target);
root.render(<App />);