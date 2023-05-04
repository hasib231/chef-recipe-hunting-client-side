import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContex } from '../../../providers/AuthProvider';

const NavigationBar = () => {
  const {user} = useContext(AuthContex)
  
    const handleLogOut = () => {

    }
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            {/* <Navbar.Brand href="#home" className="my-color-1">
              CHEF HUNTER
            </Navbar.Brand> */}
            <h1 className="my-color-1">CHEF HUNTER</h1>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="#pricing">Career</Nav.Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                )}

                {user ? (
                  <Button
                    onClick={handleLogOut}
                    variant="secondary"
                    className="my-bg-color-2 my-color-2"
                  >
                    Logout
                  </Button>
                ) : (
                  <Link to="/login">
                    <Button
                      variant="secondary"
                      className="my-bg-color-2 my-color-2"
                    >
                      Login
                    </Button>
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
};

export default NavigationBar;