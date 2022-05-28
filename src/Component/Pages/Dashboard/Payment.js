import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Element/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L4A7BJL6kiX0L60tnAOlbpBV2eFKXkAYusVFCBUcOZe0FTn9Yxxm2jIHQdbBWCotDdnInbzod5rO93UqxphKEgP00bqQfWYVg');

const Payment = () => {
    const { id } = useParams();
    const url = `https://shielded-beyond-98967.herokuapp.com/order/${id}`;

    const { data: orderpay, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="card w-50 mx-auto bg-info shadow text-light my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {orderpay.username}</p>
                    <h2 className="card-title">Please Pay for : {orderpay.Productname}</h2>
                    <p>Your order : <span className='text-orange-700'>{orderpay.OrderQty}</span>  pcs and $ {orderpay.unitprice} per peoduct</p>
                    <p>Please pay : ${orderpay.payprice}</p>
                </div>
            </div>
            <div className="card w-50 mx-auto bg-light shadow  mt-2">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm orderpay={orderpay} />
                    </Elements>
                </div>
            </div> 
        </div>
    );
};

export default Payment;