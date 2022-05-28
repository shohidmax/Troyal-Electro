import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "./logo.png";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const LogOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  return (
    <div>
      
      <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="../home">
            <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top" />
            {"  "} 
            Troyal Electro
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link className="btn btn-primary" to="home">Home</Link>
              
              <Link className="btn btn-primary" to="Blogs">Blogs</Link>
              <Link className="btn btn-primary" to="myprotfolio">My Protfolio</Link>
              <Link className="btn btn-primary" to="about">About</Link>
              { user? (<>
              <Link className="btn btn-primary" to="dashboard">Dashboard</Link>
              <button className="btn btn-primary" onClick={LogOut} >{user?.displayName} - LogOut</button></>):(
              <Link className="btn btn-primary" to="Login">Login</Link>)

              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
