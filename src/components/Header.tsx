import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { GiKnifeFork } from "react-icons/gi"; // Import the GiKnifeFork icon
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <GiKnifeFork className="logo" /> Fake Restaurant
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#order">Order</Nav.Link>
              <Nav.Link href="#cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
