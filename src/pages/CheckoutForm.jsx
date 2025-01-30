import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useCart from '../hook/useCart';
import axios from 'axios';
import UseAxiosSecured from '../hook/UseAxiosSecured';
import { AuthContext } from '../Provider';

const CheckoutForm = () => {

    const stripe = useStripe();
  const elements = useElements();
         let {user}= useContext(AuthContext)



  let axiosSecure=UseAxiosSecured()

  let [error,setError]= useState('')
  let [clientSecret,setclientSecret]=useState('')

  let [cart]=useCart()

  let totalPrice=cart.reduce((total,item)=>total+item.price,0)

//   useEffect(() => {
//     axiosSecure.post("/createPaymentIntent", { price: totalPrice })
//       .then(res => {
//         console.log("Received clientSecret from backend:", res.data.clientSecret);
//         setclientSecret(res.data.clientSecret);
//       })
//       .catch(error => console.error("Error fetching clientSecret:", error));
//   }, [axiosSecure, totalPrice]);
  

  useEffect(()=>{

    axiosSecure.post("/createPaymentIntent",{price:totalPrice})
    .then(res=>{
        console.log(res.data.clientSecret)
        setclientSecret(res.data.clientSecret)

    })

    
  },[axiosSecure,totalPrice])

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[error]', error);
      setError(error.message)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setError('')
    }

    //confirm payment

    let {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
        payment_method:{
            card:card,
            billing_details:{
                email:user?.email || "anonymous",
                name:user?.displayName || "anonymous"

            }
        }
    })

    if(confirmError){
        console.log("confirm error")
    }
    else{
        console.log("payment intent",paymentIntent)
    }


    // const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: card,
    //       billing_details: {
    //         email: user?.email || "anonymous",
    //         name: user?.displayName || "anonymous"
    //       }
    //     }
    //   });
      
    //   if (confirmError) {
    //     console.error("Payment confirmation error:", confirmError.message);
    //     setError(confirmError.message);
    //   } else {
    //     console.log("Payment successful:", paymentIntent);
    //     setError("");
    //   }
      


    
  };
    return (
        <div>
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
      <button className='btn btn-primary mt-5' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className='text-red-600 font-bold my-4'>{error}</p>
    </form>
        </div>
    );
};

export default CheckoutForm;