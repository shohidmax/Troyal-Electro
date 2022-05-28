import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useUsers from '../../../Hooks/useUsers';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    const [users1, setusers1] = useUsers(user);
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>

                </div>
                <div className='col-md-4'>
                <div className="card w-100">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">User Name : {user?.displayName}</li>
                      <li className="list-group-item">Email : {user?.email}</li>  
                      <li className="list-group-item"> <Link to="/dashboard/updateprofile" className='btn btn-success'>Update Profile</Link></li>
                    </ul>
                </div>

                </div>
                <div className='col-md-4'>

                </div>
                
            </div>
            
        </div>
    );
};

export default Myprofile;