const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createProduct = async (data) => {
    return await stripe.products.create({
        name: data.name,
        type: 'service', // 'service' or 'good' depending on your use case
    });
}