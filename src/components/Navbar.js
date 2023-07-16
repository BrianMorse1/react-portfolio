import React from "react";
import { Container, Link } from '@chakra-ui/react'
// import { Link as ReactLink } from "react-router-dom"


function Navbar() {
    return (
        <Container maxW='full'>
            <Link href='/home'>
            Home
            </Link>
            <Link href='/about'>
            About
            </Link>
            <Link href='/projects'>
            Projects
            </Link>
            <Link href='/contact'>
            Contact
            </Link>
        </Container>
)}


export default Navbar;