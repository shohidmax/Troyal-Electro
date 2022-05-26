import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const LogOut = () => {
    signOut(auth);
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-2">


        <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
        <Container>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav bg-primary h-100">
            <Nav className="ms-auto flex-column m-1 ">
              <Link className="btn btn-primary" to="/dashboard">Dashboard</Link>
              <Link className="btn btn-primary" to="/dashboard/myprofile">Profile</Link>
              { user? (<><Link className="btn btn-primary" to="/dashboard/makeadmin">Make Admin</Link>
              <Link className="btn btn-primary" to="/dashboard/manageallorders">Manage All Order</Link>
              <Link className="btn btn-primary" to="/dashboard/addreview">add Review</Link>
              <Link className="btn btn-primary" to="dashboard">My Item</Link>
              <button className="btn btn-primary" onClick={LogOut} > LogOut</button></>):(
              <Link className="btn btn-primary" to="Login">Login</Link>)

              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
          {/* <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
              
                <ul className="navbar-nav flex-column w-100">
                <a className="navbar-brand" href="#">
                Navbar
                </a>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-primary text-white mb-2" to="/dashboard">
                      dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-primary text-white mb-2" to="/dashboard/myorder">
                      My Order
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-primary text-white mb-2" to="/dashboard/myprofile">
                    My profile
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-primary text-white mb-2" to="/dashboard/manageProduct">
                      Manage Product
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-primary text-white mb-2" to="/dashboard/makeadmin">
                    makeadmin
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link btn btn-primary text-white mb-2" to="/dashboard/addreview">
                    Add Review
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav> */}
        </div>
        <div className="col-lg-10">
          <h1>this is fokira dashboard</h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
{
  /* <nav className="nav flex-column">
                <Link className="nav-link" to="/dashboard">My Appointments</Link>
                <Link className="nav-link" to="/dashboard/bannar">My Appointments</Link>
                <Link className="nav-link" to="/dashboard/signup">My Appointments</Link>
                <Link className="nav-link" to="/dashboard/blogs">My Appointments</Link>
                    <a className="nav-link" href="#">Link</a>
                     <a className="nav-link disabled">Disabled</a>
                    </nav> */
}
