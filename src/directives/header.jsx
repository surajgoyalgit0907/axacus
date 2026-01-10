import React from 'react';
import '../components/componentCss/header.css';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

import { RiQuestionAnswerLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";


import mainLogo from '../assets/images/mainLogo.svg';
import config from '../configFile/config';

const Header = () => {

    const menuToggle = () => {
        var a = document.getElementById("menuToggleid");
        a.classList.toggle("active");
        var b = document.getElementById("navigationid");
        b.classList.toggle("mobileNav");
    }


    return (
        <>

            <header>
                <Box className="topHeadBox">
                    <Container maxWidth='xxl'>
                        <Box className="topHead">
                            <Box className="topdetail">
                                <ul>
                                    <li><MdOutlineEmail /><Typography variant='span'>info@example.com</Typography></li>
                                    <li><IoLocationSharp /><Typography variant='span'>Jos Mnheles Hutyio, 1430 Marasil</Typography></li>
                                </ul>
                            </Box>
                            <Box className="top_socialBox">
                                <ul>
                                    <li><Link to={""}><FaFacebookF /></Link></li>
                                    <li><Link to={""}><FaTwitter /></Link></li>
                                    <li><Link to={""}><FaInstagram /></Link></li>
                                    <li><Link to={""}><IoSearch /></Link></li>
                                </ul>
                                <Box className='quoteBox' sx={{ ml: '50px' }}>
                                    <Typography>GET A QUOTE</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>

                <Container maxWidth='xxl'>
                    <AppBar component={"nav"} className='navbar'>
                        <Toolbar sx={{ px: { md: '0px' } }}>
                            <Link to={`${config.baseurl}`}>
                                <Box component={"img"} src={mainLogo} className='mainLogo' />
                            </Link>
                            <Box className="menuToggle" id="menuToggleid" onClick={menuToggle}>
                                <Box component={"span"} className='bar'></Box>
                                <Box component={"span"} className='bar'></Box>
                                <Box component={"span"} className='bar'></Box>
                            </Box>
                            <Box className="navigation" id="navigationid">
                                <ul className='nav'>
                                    {/* <li className='nav_item'>
                                        <NavLink to={""} className="nav_link active">Home</NavLink>
                                    </li> */}

                                    {/* <li className='nav_item'>
                                        <NavLink to={""} className={({ isActive }) => `nav_link ${isActive ? "active" : ""}`}>Home</NavLink>
                                    </li> */}

                                    <li className='nav_item'>
                                        <NavLink to={`${config.baseurl}`} className={({ isActive }) => `nav_link ${isActive ? "active" : ""}`}>Home</NavLink>
                                    </li>
                                    <li className='nav_item'>
                                        <NavLink to={`${config.baseurl}about`} className={({ isActive }) => `nav_link ${isActive ? "active" : ""}`}>About</NavLink>
                                    </li>
                                    <li className='nav_item'>
                                        <NavLink to={`${config.baseurl}services`} className={({ isActive }) => `nav_link ${isActive ? "active" : ""}`}>Services</NavLink>
                                    </li>
                                    <li className='nav_item'>
                                        <NavLink to={`${config.baseurl}projects`} className={({ isActive }) => `nav_link ${isActive ? "active" : ""}`}>Projects</NavLink>
                                    </li>
                                    <li className='nav_item'>
                                        <NavLink to={`${config.baseurl}blog`} className={({ isActive }) => `nav_link ${isActive ? "active" : ""}`}>Blog</NavLink>
                                    </li>
                                    <li className='nav_item'>
                                        <NavLink to={`${config.baseurl}contact`} className={({ isActive }) => `nav_link ${isActive ? "active" : ""}`}>Contact Us</NavLink>
                                    </li>
                                </ul>
                                <Box className="questionBox" sx={{ marginLeft: "40px" }}>
                                    <Box className=''><RiQuestionAnswerLine sx={{ color: '#e12454' }} /></Box>
                                    <Box className=''>
                                        <Typography variant='h5' sx={{ marginBottom: '5px' }}>Any Questions?</Typography>
                                        <Typography variant='span'>+123 456 7890</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Container>
            </header>
        </>
    )
}

export default Header
