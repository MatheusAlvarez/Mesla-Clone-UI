import React from "react";
import './styleHeader.css'
import Logo from '../../assets/teslaLogoSmall.svg' 
import { Navbar, Container, NavDropdown, Offcanvas, Nav } from "react-bootstrap";

const Header = () => {
    return(
         <div className="header">
            <div className="header_logo">
                <img src={Logo} alt='Logo da Marca'></img>
            </div>
            <div className="header_center">
               <p className="ghostItem">Model S</p>
               <p className="ghostItem">Model 3</p>
               <p className="ghostItem">Model X</p>
               <p className="ghostItem">Model Y</p>
               <p className="ghostItem">Solar Roof</p>
               <p className="ghostItem">Solar Panel</p>
            </div>
            
            <div className="header_right">
            <p className="ghostItem">Shop</p>
            <p className="ghostItem">Account</p>
            <p className="ghostItem">Menu</p>
            </div>
            
            <div className="revealGhostItems">
            <Navbar className="cont" expand={false}>
  <Container fluid >
    <Navbar.Toggle href="#" className="menu"><p>Menu</p></Navbar.Toggle>
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Item className="listItem">Model S</Nav.Item>
          <Nav.Item className="listItem">Model 3</Nav.Item>
          <Nav.Item className="listItem">Model X</Nav.Item>
          <Nav.Item className="listItem">Model Y</Nav.Item>
          <Nav.Item className="listItem">Solar Roof</Nav.Item>
          <Nav.Item className="listItem">Solar Panels</Nav.Item>
          <Nav.Item className="listItem">Existing Inventory</Nav.Item>
          <Nav.Item className="listItem">Used Inventory</Nav.Item>
          <Nav.Item className="listItem">Trade-in</Nav.Item>
          <Nav.Item className="listItem">Test Drive</Nav.Item>
          <Nav.Item className="listItem">Power Wall</Nav.Item>
          <Nav.Item className="listItem">Commercial Energy</Nav.Item>
          <Nav.Item className="listItem">Utillities</Nav.Item>
          <Nav.Item className="listItem">Charging</Nav.Item>
          <Nav.Item className="listItem">Find Us</Nav.Item>
          <Nav.Item className="listItem">Support</Nav.Item>
          <Nav.Item className="listItem">Investor Relations</Nav.Item>
          <Nav.Item className="listItem">Shop</Nav.Item>
          <Nav.Item className="listItem">Account</Nav.Item>
          <NavDropdown title="More" id="offcanvasNavbarDropdown" className="listItem">
            <NavDropdown.Item href="#action3">Cybertruck</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Roadster</NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              Semi
            </NavDropdown.Item>
            <NavDropdown.Item>News</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="English">
            <NavDropdown.Item>Portuguese-Br</NavDropdown.Item>
            <NavDropdown.Item>Portuguese-Pt</NavDropdown.Item>
            <NavDropdown.Item>Italian</NavDropdown.Item>
            <NavDropdown.Item>Spanish</NavDropdown.Item>
            <NavDropdown.Item>French</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar> 
        </div>
        </div> 
        
    )
}

export default Header;
