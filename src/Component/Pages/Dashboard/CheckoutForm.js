import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckoutForm = ({ orderpay }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const navigate = useNavigate();
     const location = useLocation();

    const { _id, payprice, email, username } = orderpay;

    useEffect(() => {
        fetch('https://shielded-beyond-98967.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ payprice })
        })
            .then(res => res.json())
            .then(data => { 
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [payprice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (transactionId) {
            
            navigate('/dashboard/myorder');
            
        }

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: username,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')
            const payment = {
                orderdata: _id,
                transactionId: paymentIntent.id
            }
            fetch(`https://shielded-beyond-98967.herokuapp.com/order/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            }).then(res=>res.json())
            .then(data => {
                setProcessing(false);
                console.log(data);
            })

        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-info btn-sm w-75 mt-2' type="submit" disabled={!stripe || !clientSecret || success}>
                    Pay Now
                </button>
            </form>
            {
                cardError && <p className='text-danger'>{cardError}</p>
            }
            {
                success && <div className='text-sucess'>
                    <p>{success}  </p>
                    <p>Your transaction Id: <span className="text-warning font-bold">{transactionId}</span> </p>
                </div>
            }
        </>
    );
};


export default CheckoutForm;