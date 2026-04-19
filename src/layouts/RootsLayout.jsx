import React from 'react';
import Navbar from '../pages/navbarPage/Navbar';
import { Outlet } from 'react-router';
import FooterPage from '../pages/footerPage/FooterPage';

const RootsLayout = () => {
    return (
        <div>                               
            <Navbar></Navbar>
            <Outlet></Outlet>
            <FooterPage></FooterPage>
        </div>
    );
};

export default RootsLayout;