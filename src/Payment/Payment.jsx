import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutFrom from "./CheckoutFrom";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51QfISB04b3lLFARwOBTLW4CymbOx7pP3fLso9QZgVqb5jtYmhCfzKMBX4WmOz9aFqFDSyRXWhmGF70eehQD1Gfj300S6ZwCUK0");

function Payment() {

 
 

  return (
    <div>
      <Elements stripe={stripePromise} >
        <CheckoutFrom />
      </Elements>

    </div>
  );
}

export default Payment;
