const { default: Stripe } = require("stripe");

const stripe = Stripe('sk_test_51MzNwDJlMPvJG3YUxDLnfFOKJslQtCkhFUPVXV8rfCrJEGqcYeoU6L2n8IrMXQT5LDvq4xLlI3VaA9LtAVYGyxPw00KDTF7XUf');


async function test(){
    console.log("test")
    const customer = await stripe.customers.create({
      email: "Test@test.test",
      name: "Test",
    });
    console.log(customer);
    const product = await createProduct('Test Product', 'This is a test product');
    console.log('Created product:', product);
        
    const price = await createPrice(1000, 'usd', product.id);
    console.log('Created price:', price);
        
    const session = await createCheckoutSession(price.unit_amount, 'Test Product', 'usd', customer.id, 'order_123', 'http://localhost:3000/success', 'http://localhost:3000/failure');
    console.log('Created checkout session:', session.url);
}


async function createCheckoutSession(price, item_name, cur, customerId, orderId, success, failure) { //price should be in the lowest denomination for that currency (pence for GBP)
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: cur,
            product_data: {
              name: item_name,
            },
            unit_amount: price,
          },
          quantity: 1,
        }],
        mode: 'payment',
        success_url: success,
        cancel_url: failure,
        customer: customerId,
        metadata: {
          order_id: orderId
        }
      });
      return session;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to redirect to checkout');
    }
  }
function redirectToCheckout(sessionId) {
    stripe.redirectToCheckout({ sessionId })
    .then(function (result) {
        if (result.error) {
            console.error(result.error);
            throw new Error('Failed to redirect to checkout');
        }
    });
  }


  async function createCustomer(email, name) {
    try {
      const customer = await stripe.customers.create({
        email: email,
        name: name,
      });
      return customer;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create customer');
    }
  }

  async function createProduct(name, description = null) {
    try {
      const product =  await stripe.products.create({
        name: name,
        description: description,
      });
      return product;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create product');
    }
  }
  
  async function createPrice(unitAmount, currency, product) {
    try {
      const price = await stripe.prices.create({
        unit_amount: unitAmount,
        currency: currency,
        product: product,
      });
      return price;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create price');
    }
  }
  
async function createMandate(customerId, paymentMethodId) {
    try {
      const mandate = await stripe.paymentMethods.create({
        type: 'bacs_debit',
        bacs_debit: {
          account_number: '00012345',
          sort_code: '108800',
        },
        billing_details: {
          name: 'Jenny Rosen',
          email: 'jenny@example.com',
          phone: '555-867-5309',
        },
        metadata: {
          customer_id: customerId,
        },
      });
  
      await stripe.paymentMethods.attach(mandate.id, {
        customer: customerId,
      });
  
      await stripe.customers.update(customerId, {
        invoice_settings: {
          default_payment_method: paymentMethodId,
        },
      });
  
      return mandate;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to create mandate');
    }
  }
  

  


module.exports = {
    createCheckoutSession,
    redirectToCheckout,
    createCustomer,
    createProduct,
    createPrice,
    createMandate,
    test
  };