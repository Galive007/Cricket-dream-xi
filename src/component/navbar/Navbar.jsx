import React from 'react';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import navImg from '../../assets/logo.png'


const Navbar = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
            <div className="navbar py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a className='text-[#131313b3]'>Home</a></li>
                            <li><a className='text-[#131313b3]'>Fixture</a></li>
                            <li><a className='text-[#131313b3]'>Teams</a></li>
                            <li><a className='text-[#131313b3]'>Schedules</a></li>
                        </ul>
                    </div>
                    <a className="w-[75%] text-xl"><img src={navImg} alt="" /></a>
                </div>

                <div className="navbar-end">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal gap-8">
                            <li><a className='text-[#131313b3]'>Home</a></li>
                            <li><a className='text-[#131313b3]'>Fixture</a></li>
                            <li><a className='text-[#131313b3]'>Teams</a></li>
                            <li><a className='text-[#131313b3] mr-[20px]'>Schedules</a></li>
                        </ul>
                    </div>
                    <a className="btn"><span>6000000000</span>Coin <FontAwesomeIcon className='text-amber-400' icon={faCoins} /></a>
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;