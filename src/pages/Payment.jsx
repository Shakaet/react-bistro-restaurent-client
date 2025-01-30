import React from 'react';
import SharedTitle from '../shared/SharedTitle';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key);

const Payment = () => {
    return (
        <div>
            <SharedTitle heading={"Payment"} subheading={"Please Pay to eat"}></SharedTitle>

            <div>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
          </Elements>
            </div>
        </div>
    );
};

export default Payment;