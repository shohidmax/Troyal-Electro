import React from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
const imageStorageKey='7dec4c10f51e1e22708ccd12b0590a32';

const AddItem = () => {
  const [user] = useAuthState(auth);



  const handleAddUser = event =>{
    event.preventDefault();
    const image = event.target.img.files[0];
    console.log(image);
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const name = event.target.name.value;
                const minorder = event.target.minorder.value;
                const model = event.target.model.value;
                const Stock_Qty = event.target.Stock_Qty.value;
                const RPU = event.target.RPU.value;
                const long_discription = event.target.long_discription.value;
                const email = event.target.email.value;
          
                const Productdata = {name, minorder, model, Stock_Qty, RPU, long_discription, email, img};
          
                // send data to the server
                fetch('http://localhost:5000/products', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
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
          <input  className="form-text form-control mb-2"   type="text" name="BarCode" placeholder='Product name' required />    
          <input  className="form-text form-control mb-2"   type="number" name="minorder" placeholder='minimum order Quntity' required />    
          <input  className="form-text form-control mb-2"   type="text" name="model" placeholder='Product model No.' required />    
          <input  className="form-text form-control mb-2"   type="number" name="Stock_Qty" placeholder='Product Stock Quntity' required />      
          <input  className="form-text form-control mb-2"   type="number" name="RPU" placeholder='Sale Per Product ৳' required />    
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

export default AddItem;