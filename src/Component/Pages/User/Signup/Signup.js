import React from "react";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../../../Hooks/useToken";
import Loading from "../../../Element/Loading";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [token] = useToken(user || gUser);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading || updating) {
    return <Loading></Loading>;
  }

  if (error || gError || updateError) {
    signInError = (
      <p className="text-danger">
        <small>
          {error?.message || gError?.message || updateError?.message}
        </small>
      </p>
    );
  }

  if (token) {
    navigate("/Home");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    console.log("update done");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card">
            <article className="card-body">
            <Link className="float-right btn btn-outline-primary" to="/login">Login</Link>
            <h4 className="card-title mb-4 mt-1">SignUp</h4>
             
              <p>
              <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-block btn-outline-primary"
                    ><i className="fab fa-google"></i> Continue with Google</button>
              </p>
              <hr />
              <form  onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                  <input
                    name=""
                    className="form-control"
                    placeholder="Your Name"
                    type="text"
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })}
                  />
                  
                </div>
                <div className="form-group">
                <label for="exampleInputEmail1" className="form-label forma">
                    
                    <span className="forma">Email address</span>
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
                </div>
                <div className="form-group">
                <label for="exampleInputEmail1" className="form-label text-start">Your Password</label>
                  <input
                    className="form-control"
                    placeholder="Your Password"
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 8,
                            message: 'Minimum 6 characters or longer'
                        }
                    })}
                  />
                  <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className='btn btn-primary btn-block' type="submit" value="Sign Up" />
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <Link className="small" to="/passwordreset">Forget Password ?</Link>
                  </div>
                </div>
              </form>
            </article>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Signup;
