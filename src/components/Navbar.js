import React from "react";
import { Container, Flex, Link, Icon } from '@chakra-ui/react';
import {  BrowserRouter as Router, 
    NavLinkLink as RouterLink } from 'react-router-dom';



function Navbar() {
    return (
        <Container maxW='full'>
            <Link as={RouterLink} to='/home' p={2}>
            Home
            </Link>
            <Link as={RouterLink} to='/about' p={2}>
            About
            </Link>
            <Link as={RouterLink} to='/projects' p={2}>
            Projects
            </Link>
            <Link as={RouterLink} to='/contact' p={2}>
            Contact
            </Link>
            <Link as={RouterLink} to='/resume' p={2}>
            Resume
            </Link>
        </Container>
)}


export default Navbar;