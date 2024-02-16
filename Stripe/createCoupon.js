const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createCoupon = async (data) => {
    let input = {
        name: data.name,
        duration: 'once',
        currency: 'usd',
        max_redemptions:1 //optional based on your requirement
    };
    if (data.discountType == "percentage") {
        input.percent_off = parseInt(data.discountValue);
    }
    if (data.discountType == "fixed") {
        input.amount_off = parseInt(data.discountValue) * 100; 
    }
    try {
        const coupon = await stripe.coupons.create(input);
        return coupon;
    } catch (error) {
        console.error('Error creating coupon:', error);
        return false;
    }
}