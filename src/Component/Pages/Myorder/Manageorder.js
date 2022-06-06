import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import useOrder from '../../../Hooks/useOrder';

const Manageorder = () => {
  const [user] = useAuthState(auth);
  const email = user.email;
    const [Order, setOrder] = useOrder();
    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `https://shielded-beyond-98967.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers:{
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remaining = Order.filter(data => data._id !== id);
                    setOrder(remaining);
                }
            })
        }

    }

    const makedelevary = (_id) => {
      fetch(`https://shielded-beyond-98967.herokuapp.com/order/orders/${_id}`, {
          method: 'PUT'
      })
          .then(res => {
              if(res.status === 403){
                  alert.error('faild to delever');
              }
              return res.json()})
          .then(data => {
              if (data.modifiedCount > 0) {
                  
                  alert('delever successfully .');
              }

          })
  }
    return (
        <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Total Orders {Order.length}</h2>

          <Table striped bordered hover>
            <thead>

              <tr>
                <th>Order Qty</th>
                <th>Coustomar Name</th>
                <th>Product name</th>
                <th>Model Name </th>
                <th>Price Per unit </th>
                <th>Payable  Amound </th>
                <th>Action</th>
                <th>Payment status</th>
                <th>Shipping status</th>
              </tr>
            </thead>
            <tbody>
              {Order.map((res) => (
                <tr key={res._id}>
                  <td>{res.OrderQty} pcs</td>
                  <td>{res.username}</td>
                  <td>{res.Productname}</td>
                  <td>{res.pmodel} Ltd.</td>
                  <td>$ {res.unitprice}</td>
                  <td>$ {res.unitprice * res.OrderQty}</td>
                  <td>{res.paid? <><button className="btn btn-success" >Paid</button></>:<><button className="btn btn-danger" onClick={() => handleUserDelete(res._id)}>Cancel order</button></>}</td>
                  <td> {res.status? <><button className="btn btn-success" >Shipped</button></>:<><button className="btn btn-info" onClick={() => makedelevary(res._id)}>Pending</button></>}</td>
                  <td> {res.status? <p>Delevered</p>:<p>DeleveredReady For Delevary</p>}</td>
                  
                </tr>
              ))}
              
            </tbody>
          </Table>

         
        </div>
      </div>
    </div>
    );
};

export default Manageorder;