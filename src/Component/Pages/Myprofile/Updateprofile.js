import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Updateprofile = () => {
    const [users, setusers] = useState([]);
    const [user] = useAuthState(auth);
    const email = user.email;
    const updateProfile = (event) =>{
        event.preventDefault();

        const education = event.target.education.value;
        const location = event.target.location.value;
        const phoneN = event.target.phoneN.value;
        const socialurl = event.target.socialurl.value;
        const address = event.target.address.value;
        const currentUser = {education, location, phoneN, socialurl, address};
            fetch(`https://shielded-beyond-98967.herokuapp.com/users1/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                alert('Profile Update successfully!!!');
                event.target.reset()
            })

    }
    return (
        <div className='container'>
            <div className='row'>
            <div className='col-md-4'>
            
            </div>
            <div className='col-md-4'>
                <h2>Please fill the Input faild and Update </h2>
                <form onSubmit={updateProfile}>
                <input  className="form-text form-control mb-2"   type="text" name="education" placeholder='Your Education' required />    
                <input  className="form-text form-control mb-2"   type="text" name="location" placeholder='Your Location' required />    
                <input  className="form-text form-control mb-2"   type="number" name="phoneN" placeholder='Your Phone Number' required />    
                <input  className="form-text form-control mb-2"   type="text" name="socialurl" placeholder='Your Linkind or social url Url' required />  
                <textarea  className="form-text form-control mb-2"   type="address" name="Your address" required />    
                
                  <button type="submit" className="btn mb-2 btn-primary">Update Profile</button>
                </form>
            
            </div>
            <div className='col-md-4'>
            
            </div>
            
            </div>
            
        </div>
    );
};

export default Updateprofile;