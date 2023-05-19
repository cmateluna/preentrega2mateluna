import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Mainlayout from "./Mainlayout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contacto from "../pages/Contacto";
import ItemDetailPage from "../pages/ItemDetailPage";
import Error404 from "../pages/Error404";

const SiteRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Mainlayout/>}>
                    <Route index element={<Home/>} />
                    <Route path='/category/:categoryId' element={<Home/>} />
                    <Route path='/aboutus' element={<AboutUs/>} />
                    <Route path='/contactus' element={<Contacto/>} />
                    <Route path='/item/:id' element={<ItemDetailPage/>} /> 
                </Route>
                <Route path="*" element={<Error404/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default SiteRoutes
