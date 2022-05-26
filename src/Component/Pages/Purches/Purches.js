import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";

const Purches = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [Pdata, setPdata] = useState({});
  const [Qtt, setQtt] = useState('');
  useEffect(() => {
    const url = `http://localhost:5000/products/${id}`;
    fetch(url)
      .then((r) => r.json())
      .then((data) => setPdata(data));
  }, []);
//   const minimumorder = parseFloat(Pdata.minorder);
//   const maximumorder = parseFloat(Pdata.minorder);
const handelOrder = event =>{
    event.preventDefault();
    const order = parseFloat(event.target.OrderQty.value);
    const minimumorder = parseFloat(Pdata.minorder);
    const maximumorder = parseFloat(Pdata.Stock_Qty);
    if(minimumorder <= order && order <= maximumorder){
        console.log(order, minimumorder, maximumorder);


        const OrderQty = event.target.OrderQty.value;
        const email = event.target.email.value;
        const username = event.target.username.value;
        const city = event.target.city.value;
        const state = event.target.state.value;
        const zipcode = event.target.zipcode.value;
        const houseno = event.target.houseno.value;
        const daddress = event.target.daddress.value;
        const Number = event.target.Number.value;
        // const email = event.target.email.value;

        const orderdata = {OrderQty, email, username, city, state, zipcode, houseno, daddress,Number};


        // send data to the server
        fetch('http://localhost:5000/order', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(orderdata)
                })
                .then(res => res.json())
                .then(data =>{
                    alert('Product added successfully!!!');
                    event.target.reset();
                })

    }
    else{
        alert(`Pleasse Order more than ${Pdata.minorder} pcs`);
    }

  

//   event.target.reset();
}



  return (
    <div className="container">
      <h1>pdata {Pdata._id}</h1>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div class="card-body">
          <img class="card-img-top img-thumbnail" style={{height: '200px'}} src={Pdata.img} alt="Card image cap"/>
            <h3 class="card-title"> Product Name{Pdata.name}</h3>
            <p class="card-text">{Pdata.long_discription}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Model : {Pdata.model}</li>
            <li class="list-group-item">Price : {Pdata.RPU}</li>
            <li class="list-group-item">  Minimum Order : {Pdata.minorder} pcs</li>
            <li class="list-group-item">  Stock Quantity : {Pdata.Stock_Qty} pcs</li>
            <div className="mt-2">
                <form onSubmit={handelOrder}>
                    
                <input  className="form-text form-control mb-2"   type="number" name="OrderQty" placeholder={Pdata.minorder} required />
                <input  className="form-text form-control mb-2"   type="email" name="email" value={user?.email} readOnly  required />
                <input  className="form-text form-control mb-2"   type="text" name="username" value={user?.displayName} readOnly  required />
                <input  className="form-text form-control mb-2"   type="text" name="city" placeholder="city" required />
                <input  className="form-text form-control mb-2"   type="text" name="state" placeholder="state" required />
                <input  className="form-text form-control mb-2"   type="text" name="zipcode" placeholder="zipcode" required />
                <input  className="form-text form-control mb-2"   type="text" name="houseno" placeholder="House No" required />
                <textarea  className="form-text form-control mb-2"   type="text" name="daddress" placeholder="Detail Address" required />
                <input  className="form-text form-control mb-2"   type="number" name="Number" placeholder="Contact Number" required />
                <input className="btn btn-primary mb-4" type="submit" value="Order Now" />
                <h1>{Qtt}</h1>
                </form>
            </div>







          </ul>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Purches;
