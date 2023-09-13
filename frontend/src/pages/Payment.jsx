import React from 'react'

const Payment = () => {
  return (
    // This is basically the body tag
    <div id="payment-page">

      {/* One with border top */}
      <div id="payment-form"> 
      <h1>Checkout</h1>

      {/* Start of the form and we are going to flex this, it will hold all of the form items */}
      <form id="flex">

        {/* Name of the card form item */}
        <div className="payment-flex-item name-on-card">
          <label>name on card</label>
          <input type="text" />
        </div>

        {/* Card number */}
        <div className="payment-flex-item card-number">
          <label>card number</label>
          <input type="text" />
        </div>

        {/* Expiry date */}
        <div className="payment-flex-item expiry-date">
          <label>expiry date</label>
          <input type="text" />
        </div>

        {/* CVV */}
        <div className="payment-flex-item cvv">
          <label>cvv</label>
          <input type="text" />
        </div>

        {/* Submit Button */}
        <div className="item-btn">
          <button>SUBMIT</button>
        </div>
      
      </form>

      </div>
      
    </div>
  )
}

export default Payment
