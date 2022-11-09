import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SidebarTest } from "./src/SidebarTest";
import { TopNavTest } from "./src/TopNavTest";

import '../src/core/sass/source.scss';
import '../node_modules/react-perfect-scrollbar/dist/css/styles.css';
import '../src/Sidebar/sass/main.scss';

const App = (props: any) => {

    return(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="test" index element={
                        <>
                            <TopNavTest />
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