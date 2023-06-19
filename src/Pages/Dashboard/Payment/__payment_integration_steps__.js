/**
 * 1. Install stripe and react stripe js
 * 2. Create a checkout form with card element (card elements contains: card number,
 *     expiration date, cvs, zip code)
 * 3. Create account on stripe and get the publishable key pk
 * 4. Get card information
 * 5. Create a payment method
 * 6. Use test card to test payment.
 * 7. On the server side: install stripe: npm install --save stripe
 * 8. Create a payment intent api with payment method types: ['card]
 *    make sure you provide amount in cents (multiply price with 100)
 * 9. call payment intent api to get client secret and store it in a state.
 * 10. use confirmCardPayment api with client secret card info.
 * 11. Display confirm card error 
 * 12. Display confirm card success 
 * 13. do things after payment -->
 */