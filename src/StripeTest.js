
const payments = require('./payments.js');

async function testStripe() {
  
  const customer =  await payments.createCustomer("test@test.com", "name");
  console.log('Created customer:', customer);

  const product =  await payments.createProduct('Test Product', 'This is a test product');
  console.log('Created product:', product);

  const price =  await payments.createPrice(1000, 'usd', product.id);
  console.log('Created price:', price);

  const session =  await payments.createCheckoutSession(price.unit_amount, 'Test Product', 'usd', customer.id, 'order_123', 'http://localhost:3000/success', 'http://localhost:3000/failure');
  console.log('Created checkout session:', session.url);


  // Redirect to checkout page
  // payments.redirectToCheckout(session);
  // payments.listen(session)
  
}

testStripe().catch(error => console.error(error));

module.exports = {
  testStripe
};
