import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Spinner from "../../../Element/Spinner";
import useProduct from "../../../Hooks/useProduct/useProduct";

const ManageInventory = () => {
  const [Product, setProduct] = useProduct();

    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `https://hidden-waters-14181.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    const remaining = Product.filter(data => data._id !== id);
                    setProduct(remaining);
                }
            })
        }
    }
    
    if(Product.length == 0){
      <Spinner></Spinner>
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Total Product {Product.length}</h2>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Barcode</th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Stock Quntity </th>
                <th>Suppler Name</th>
                <th>MRP ৳</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {Product.map((res) => (
                <tr key={res._id}>
                  <td>{res.BarCode}</td>
                  <td><img style={{width: '45px'}} src={res.Product_img_url} alt="" /></td>
                  <td>{res.Brand}{" "}{res.Product}{" "} {res.Style}</td>
                  <td>{res.Stock_Qty}</td>
                  <td>{res.Brand} Ltd.</td>
                  <td>৳ : {res.RPU}</td>
                  <td><button className="btn btn-danger" onClick={() => handleUserDelete(res._id)}>Delete</button></td>
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

export default ManageInventory;
