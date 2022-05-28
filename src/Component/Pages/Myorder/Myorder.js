import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Myorder = () => {
    const [order, setorder] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setorder(data);
                });
        }
    }, [user])

    const handleCancil = id =>{
        console.log(id);
        
            const proceed = window.confirm('Are you sure you want to delete?');
            if(proceed){
                const url = `http://localhost:5000/order/${id}`;
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                .then(res => res.json())
                .then(data =>{
                    if(data.deletedCount > 0){
                        const remaining = order.filter(data => data._id !== id);
                        setorder(remaining);
                    }
                })
            }
    
        
    }

    return (
        <div>
            <div>
            <h2>My order: {order.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Product name</th>
                            <th>Order Quantity</th>
                            <th> Shipping Address</th>
                            <th>unit price</th>
                            <th>Payable amound</th>
                            <th>payment</th>
                            <th>Transaction id</th>
                            <th>Action</th>
                        </tr>


                        
                    </thead>
                    <tbody>
                        {
                            order.map((a, index) => <tr key={a._id}>
                                <th>{index + 1}</th>
                                <td>{a.Productname}</td>
                                <td>{a.OrderQty}</td>
                                <td>{a.city},{a.state},{a.zipcode}</td>
                                <td>{a.unitprice}</td>
                                <td>$ {a.payprice}</td>
                                <td>
                                    {(a.payprice && !(a.paid)) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn  btn-success'>pay</button></Link>}
                                    {(a.payprice && a.paid) && <div>
                                        <p><span className='text-success btn btn-sucess'>Paid</span></p>
                                        
                                    </div>}
                                </td>
                                <td><small style={{width: '30px'}}> <span className='text-success'>{a.transactionId}</span></small></td>
                                <td> {a.paid? <button className='btn btn-succcess text-success '> Deleverd</button>:<button className='btn btn-primary danger' onClick={() => handleCancil(a._id)}>Cancel order</button>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
            
        </div>
    );
};

export default Myorder;