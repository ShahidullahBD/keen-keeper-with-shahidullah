import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import { IoHomeOutline } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { LuChartLine } from 'react-icons/lu';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm w-[90%] mx-auto">
            <div className="flex-1">
                <img src={logo} alt="logo" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-2 font-bold">
                    <NavLink 
                    className={({isActive})=>`px-2 py-1 flex items-center gap-2 rounded-sm ${isActive? 'text-white bg-green-800': ''}`}
                    to={'/'}>
                        <span><IoHomeOutline/></span>
                        Home</NavLink>                   
                    <NavLink 
                    className={({isActive})=>`px-2 py-1 flex items-center gap-2 rounded-sm ${isActive? 'text-white bg-green-800': ''}`}
                    to={'/timeline'}>
                        <IoMdTime/>
                        Timeline</NavLink>                   
                    <NavLink 
                    className={({isActive})=>`px-2 py-1 flex items-center gap-2 rounded-sm ${isActive? 'text-white bg-green-800': ''}`}
                    to={'/state'}>
                        <LuChartLine/>
                        State</NavLink>                   
                </ul>
            </div>
        </div>
    );
};

export default Navbar;