const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createCustomer = async (data) => {
    return await stripe.customers.create({
        name: `${data.firstName} ${data.lastName}`,
        email: data.email,
        phone: data.phoneNumber || null,
    });
}
