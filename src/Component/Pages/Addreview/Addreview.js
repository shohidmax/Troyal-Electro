import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';



const Addreview = () => {
  const [user] = useAuthState(auth);



  const handleAddUser = event =>{
    event.preventDefault();
     
     
    const image = event.target.img.files[0];
    console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMG_KEY}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const name = event.target.name.value;
                const long_discription = event.target.long_discription.value;
                const email = event.target.email.value;
                const rating = event.target.rating.value;
                const Productdata = {name, rating, long_discription, email, img};
          
                // send data to the server
                fetch('http://localhost:5000/review', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(Productdata)
                })
                .then(res => res.json())
                .then(data =>{
                    alert('Product added successfully!!!');
                    event.target.reset();
                })

            }
            
        })

      

      // const image = event.target.img.value;

     
  }

    return (
      <div className='container'>
            
      <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 border border-primary rounded mt-2 mb-2'>
          <h2>Add Product</h2>
          <form onSubmit={handleAddUser}>
          <input  className="form-text form-control mb-2"   type="text" name="name" value={user?.displayName} required />    
          <select className="form-text form-control mb-2"  name="rating" >
                 <option value="5">5 out of 5</option>
                 <option value="4">5 out of 4</option>
                 <option value="3">5 out of 3</option>
                <option value="2">5 out of 2</option>
                <option value="1">5 out of 1</option>
            </select>     
          <input  className="form-text form-control mb-2"   type="email" name="email" value={user?.email} readOnly  required />
          <label className="form-label mb-2" for="customFile">Choose a Product Image </label>
          <input type="file" className="form-control  mb-2" name="img" />    
          <textarea  className="form-text form-control mb-2"   type="text" name="long_discription" required />  
            
          
            <button type="submit" className="btn mb-2 btn-primary">Submit</button>
          </form>

          </div>
          <div className='col-md-4'></div>

      </div>
      
  </div>
    );
};

export default Addreview;