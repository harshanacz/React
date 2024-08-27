import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

const GlassNavbar = () => {
    return (
        <Navbar expand="lg" style={styles.navbar}>
            <Navbar.Brand href="#home" style={styles.brand}>Todo Web</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home" style={styles.link}>Home</Nav.Link>
                    <Nav.Link href="#about" style={styles.link}>About</Nav.Link>
                    <Nav.Link href="#contact" style={styles.link}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

const styles = {
    navbar: {
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)',
        padding: '10px 20px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 1000,
    },
    brand: {
        color: '#fff',
        fontWeight: 'bold',
    },
    link: {
        color: '#fff',
        marginLeft: '20px',
    },
};

export default GlassNavbar;
