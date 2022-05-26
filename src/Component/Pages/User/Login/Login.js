import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../../../firebase.init";
import useToken from "../../../../Hooks/useToken";
import Loading from "../../../Element/Loading";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [token] = useToken(user || gUser);

  let signInError;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card">
            <article className="card-body">
              <Link className="float-right btn btn-outline-primary" to="/Signup"> Signup</Link>
              <h4 className="card-title mb-4 mt-1"> Login </h4>
              <p>
              <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-block btn-outline-primary"
                    ><i className="fab fa-google"></i> Continue with Google</button>
              </p>
              <div >
                  <div>OR</div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <label className="label">
                      <span className="label-text">Email</span>
                 </label>
                  <input
                    name=""
                    className="form-control"
                    placeholder="Email or login"
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })}

                  />
                  <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="******"
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 8,
                            message: 'Password Minimum 8 characters'
                        }
                    })}
                  />
                  <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className='btn btn-primary btn-block' type="submit" value="Login" />
                      {signInError}
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <Link className="small" to="/passwordreset">Forget password ?</Link>
                  </div>
                </div>
              </form>
            </article>
          </div>
        </div>
        <div  className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Login;