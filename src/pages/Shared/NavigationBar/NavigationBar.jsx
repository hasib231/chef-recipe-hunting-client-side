import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  
    const handleLogOut = () => {
         logOut()
           .then()
           .catch((error) => console.log(error));
    }
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <h1 className="my-color-1">CHEF HUNTER</h1>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                {/* <Nav.Link href="/">Home</Nav.Link> */}
                <Link className="my-color-1" to="/">
                  Home
                </Link>
                <Link className="my-color-1 ms-4" to="/blog">
                  Blog
                </Link>
              </Nav>
              <Nav>
                {user && (
                  <FaUserCircle style={{ fontSize: "2rem",color: "green" }}></FaUserCircle>
                )}

                {user ? (
                  <Button
                    onClick={handleLogOut}
                    variant="secondary"
                    className="my-bg-color-2 my-color-2 ms-4"
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