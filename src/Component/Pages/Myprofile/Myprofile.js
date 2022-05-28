import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth);
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
                      <li className="list-group-item">  </li>
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