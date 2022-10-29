import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarTest } from "./src/SidebarTest";

import '../node_modules/react-perfect-scrollbar/dist/css/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../src/sidebar/sass/source.scss';

const App = (props: any) => {

    return(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="test" index element={
                        <>
                            <SidebarTest />
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
};


const target = document.querySelector("#root");
const root = ReactDOM.createRoot(target);
root.render(<App />);