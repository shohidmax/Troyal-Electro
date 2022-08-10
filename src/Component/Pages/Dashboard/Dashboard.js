import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const LogOut = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-lg-2">


        <Navbar collapseOnSelect expand="md" bg="primary" variant="light">
        <Container>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav bg-primary h-100">
            <Nav className="ms-auto flex-column m-1 ">
              <Link className="btn btn-primary" to="/dashboard">Dashboard</Link>
              <Link className="btn btn-primary" to="/dashboard/profilecard">My Profile</Link>
              
              {admin? (<>
              <Link className="btn btn-primary" to="/dashboard/users"> Make Admin</Link>
              <Link className="btn btn-primary" to="/dashboard/manageorder">Manage All Order</Link>
              <Link className="btn btn-primary" to="/dashboard/addItem">Add Tools</Link>
              <Link className="btn btn-primary" to="/dashboard/manageproduct">Manage Products</Link>
              <button className="btn btn-primary" onClick={LogOut} > LogOut</button>
              
              </>):(<>
              <Link className="btn btn-primary" to="/dashboard/addreview">Add Review</Link>
              <Link className="btn btn-primary" to="/dashboard/myorder">My order</Link>
              <Link className="btn btn-primary" to="/dashboard/inv">pdf</Link>
              <button className="btn btn-primary" onClick={LogOut} > LogOut</button></>)

              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>        
        </div>
        <div className="col-md-10">
          <h1 className="text-primary">Wellcome To Dashboard !!</h1>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
