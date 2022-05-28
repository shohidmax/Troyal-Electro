import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useOrder from '../../../Hooks/useOrder';

const Manageorder = () => {
    const [Order, setOrder] = useOrder();
    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `http://localhost:5000/orders/${id}`;
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
    return (
        <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Total Product {Order.length}</h2>

          <Table striped bordered hover>
            <thead>

              <tr>
                <th>Order Qty</th>
                <th>Name</th>
                <th>city</th>
                <th>Product name </th>
                <th>Model Name</th>
                <th>MRP ৳</th>
                <th>Delete</th>
                <th>shipped</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {Order.map((res) => (
                <tr key={res._id}>
                  <td>{res.OrderQty}</td>
                  <td>{res.username}</td>
                  <td>{res.Productname}</td>
                  <td>{res.pmodel} Ltd.</td>
                  <td>৳ : {res.unitprice}</td>
                  <td><button className="btn btn-danger" onClick={() => handleUserDelete(res._id)}>Delete</button></td>
                  <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button></td>
                  <td><Link to={`/inventory/${res._id}`}><button className="btn btn-primary">Update</button></Link></td>
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