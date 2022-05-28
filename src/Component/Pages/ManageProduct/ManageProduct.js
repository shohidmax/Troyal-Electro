import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProduct from '../../../Hooks/useProduct';

const ManageProduct = () => {
    const [Product, setProduct] = useProduct();
    const handleUserDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            const url = `https://shielded-beyond-98967.herokuapp.com/products/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
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

    return (
        <div>
            <h1>product : {Product.length}</h1>
            <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Total Product {Product.length}</h2>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Minimum order</th>
                <th>Stock Quntity </th>
                <th>Model Number</th>
                <th>Unit Price $</th>
                <th>Product Discription</th>
                <th>Delete</th>
                
              </tr>
            </thead>
            <tbody>
              {Product.map((res) => (
                <tr key={res._id}>
                  <td>{res.name}</td>
                  <td><img style={{width: '45px'}} src={res.img} alt="" /></td>
                  <td>{res.minorder}</td>
                  <td>{res.Stock_Qty}</td>
                  <td>{res.model} </td>
                  <td>$  {res.RPU}</td>
                  <td>{res.long_discription}</td>
                  <td><button className="btn btn-danger" onClick={() => handleUserDelete(res._id)}>Delete</button></td>
                  {/* <td><Link to={`/inventory/${res._id}`}><button className="btn btn-primary">Update</button></Link></td> */}
                </tr>
              ))}
              
            </tbody>
          </Table>

         
        </div>
      </div>
    </div>
            
        </div>
    );
};

export default ManageProduct;