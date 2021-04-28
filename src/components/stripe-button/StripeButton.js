import React from 'react'


import StripeCheckout from 'react-stripe-checkout'


function StripeCheckoutButton({price}) {


    const priceForStripe = price * 100

    const publishableKey = 'pk_test_51Gq5IyHey2FaICLYt6i49opKl9zC6uvaaHssNeYySZAPAtUyzhak2KcexCBCzl6AvSHPn6sAuk8lp5EGIPIfJYtp002nUy5kPy'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
        currency="NZD"
        label='Pay Now'
        name='Send It Clothing Ltd.'
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        
       />
    )
}

export default StripeCheckoutButton
