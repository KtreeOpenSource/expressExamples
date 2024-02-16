const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.getTransactions = async (customerStripeId) => {
    const res = await stripe.paymentIntents.list({ customer: customerStripeId });
    const transactions = res.data ? res.data : [];
    return transactions;
}