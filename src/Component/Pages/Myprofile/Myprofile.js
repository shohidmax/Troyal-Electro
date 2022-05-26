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
                <div class="card w-100">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">User Name : {user.displayName}</li>
                      <li class="list-group-item">Email : {user.email}</li>
                      <li class="list-group-item">A thir</li>
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