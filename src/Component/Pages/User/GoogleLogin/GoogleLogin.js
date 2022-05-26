import React from "react";
// import logo from "../../../../image/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth, {sendEmailVerification: true});
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
      navigate(from, { replace: true });
    }
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Please wait...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Successfully Loged</p>
      </div>
    );
  }
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className=" btn bg-succes w-100 mx-auto">
      <button onClick={() => signInWithGoogle()} className="btn btn-block btn-outline-primary"> <i className="fab fa-google"></i>  Login With Google</button>
    </div>
  );
};

export default GoogleLogin;