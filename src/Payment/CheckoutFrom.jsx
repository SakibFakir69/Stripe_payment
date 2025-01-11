import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import useAxiosPublic from "../apiManagement/useAxiosPublic";
import UseCart from "../Hooks/UseCart";


function CheckoutFrom() {

    const stripe = useStripe();
    const element = useElements();
    const axiosPublic = useAxiosPublic();
    const [ err , seterr ] = useState('')

    const [ id , setid ] = useState('');

    // const [cart ] = UseCart();
    const price = 10;

    const [ clientSecret , setclientSecret ] = useState(
        ""
    )

    useEffect(()=>{

         axiosPublic.post('/create-payment-intent',{price})
        .then((res)=>{
            console.log(res.data.clientSecrect);
            setclientSecret(res.data. clientSecret)
        })



    },[])






    const paymentButtonHandle =async (event)=>{
        event.preventDefault();

        const card = element.getElement(CardElement);
        alert("ok")

        if(!stripe)
        {
            return ;
        }
        if(element==null)
        {
            return;
        }

        const {error , paymentMethod} = await stripe.createPaymentMethod({
            type:'card',
            card,
           
        })

        // error 
        if(error)
        {
            seterr(error.message);
        }else{
            seterr('')
        }

        // confirm payment 
        const {paymentIntent , error : confirmError } = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card : card,
            },
            // userdeatils

            // problem on biling detials
          

        })
        if(confirmError)
        {
            console.log('error e',confirmError)
        }else{
            console.log('payment done',paymentIntent)
            if(paymentIntent.status==='succeeded')
            {
                setid(paymentIntent.id);

               alert("done")


            }
        }


    }



  return <div>

    <form onSubmit={paymentButtonHandle}>

        {/* card element form stripe  */}
        <CardElement   options={{
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  }}  className="border mt-10 px-10">

          

        </CardElement >
        {/* get input filed */}


        <button type="submit">pay</button>
        <p className="text-red-400">{err}</p>
      
        


    </form>



  </div>;
}

export default CheckoutFrom;
