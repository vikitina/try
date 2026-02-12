import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../../pages/main';
import Catalog from '../../pages/catalog';
import ChoiceProgram from '../../pages/choice-program';
import Layout from '../layout';
export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path={"/catalog"} element={<Catalog />} />
                    <Route path={"/program"} element={<ChoiceProgram />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
