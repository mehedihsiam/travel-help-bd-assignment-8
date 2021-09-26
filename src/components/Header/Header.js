import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Image from '../../logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className="menu-header">
                <Navbar>
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={Image} alt="" className="logo" />
                        </Navbar.Brand>
                        <Navbar.Brand href="#home" className="text-white fs-6"> Home</Navbar.Brand>
                        <Navbar.Brand href="#about" className="text-white fs-6"> About Us</Navbar.Brand>
                        <Navbar.Brand href="#blogs" className="text-white fs-6"> Blogs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Button className="btn btn-a live-chat">Live Chat</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </div>
    );
};

export default Header;