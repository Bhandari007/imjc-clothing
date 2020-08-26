import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price *100;
    const publishableKey =
      "pk_test_51HKNgqEMBwwgGx8WmjREHbXAuhn8tFv4j4GjFF1ocv8M2l5knNwstVCyf7ZR33WwWjzrFGMO17daKLcFLnXeAUef00PmkKAoh5";
      
      const onToken = token =>{
          console.log(token);
          alert('Payment Sucessfull');
      }

      return (
          <StripeCheckout
            label = 'Pay Now'
            name = "IMJC Ltd"
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description = {`You total is NRs ${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}
          />
      );
};

export default StripeCheckoutButton;