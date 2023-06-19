import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { loadStripe } from '@stripe/stripe-js';
import useCart from '../../../hooks/useCart';

const Payment = () => {
    //TODO: Provide publishable key
    const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
    const [cart] = useCart()
    const total = cart.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="Please Process"></SectionTitle>
            <h2 className="text-3xl">Teka O Teka Tumi Koi!.....</h2>

            <Elements stripe={stripePromise}>
                <Checkout price={price} cart={cart}></Checkout>
            </Elements>
        </div>
    );
};

export default Payment;