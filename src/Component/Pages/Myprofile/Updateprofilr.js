import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Users from '../Dashboard/Users';

const Updateprofilr = () => {
    const [user] = useAuthState(auth);
    

    const upadtprofile = () =>{


        const updatedStock = {reStock};
        // update Quntity quntity to the server
        const url = `https://hidden-waters-14181.herokuapp.com/products/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedStock)
        })
        .then(res => res.json())
        .then(data =>{
            // setPdata(data);
            alert('product quntity Delete successfully!');
            // event.target.reset();
            window.location.reload();
        })

    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                <form onSubmit={handelOrder}>
                    
                <input  className="form-text form-control mb-2"   type="number" name="OrderQty" placeholder={Pdata.minorder} required />
                <input  className="form-text form-control mb-2"   type="email" name="email" value={user?.email} readOnly  required />
                <input  className="form-text form-control mb-2"   type="text" name="username" value={user?.displayName} readOnly  required />
                <input  className="form-text form-control mb-2"   type="text" name="city" placeholder="city" required />
                <input  className="form-text form-control mb-2"   type="text" name="state" placeholder="state" required />
                <input  className="form-text form-control mb-2"   type="text" name="zipcode" placeholder="zipcode" required />
                <input  className="form-text form-control mb-2"   type="text" name="houseno" placeholder="House No" required />
                <input  className="form-text form-control mb-2"   type="text" name="link1" placeholder="Linked in Profile Link / Other social Link" required />
                <textarea  className="form-text form-control mb-2"   type="text" name="daddress" placeholder="Detail Address" required />
                <textarea  className="form-text form-control mb-2"   type="text" name="education" placeholder="Educational information " required />
                <input  className="form-text form-control mb-2"   type="number" name="Number" placeholder="Contact Number" required />
                <input className="btn btn-primary mb-4" type="submit" value="Order Now" />
                <h1>{Qtt}</h1>
                </form>
                </div>
                <div className='col-md-4'></div>
            </div>
            
        </div>
    );
};

export default Updateprofilr;