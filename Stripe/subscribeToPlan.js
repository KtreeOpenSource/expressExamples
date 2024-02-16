const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.subscribeCustomer = async (customerId, planId, trialDays = 0, couponId) => {
    try {
        let input = {
            customer: customerId,
            items: [{ plan: planId }],
            trial_period_days: trialDays,
        };
        if (couponId) {
            input.coupon = couponId;
        }
        let subscription = await stripe.subscriptions.create(input);

        if (subscription.status === 'active' || subscription.status === 'trialing') {
            const invoice = await stripe.invoices.retrieve(subscription.latest_invoice);
            if(invoice){
                if(invoice.discount && invoice.discount.coupon && invoice.discount.coupon.id == couponId && invoice.discount.coupon.amount_off > 0){
                    subscription.couponApplied = true;
                }
            }
            return subscription;
        } else {
            throw new Error(`Subscription not successful. Status: ${subscription.status}`);
        }
    } catch (error) {
        console.error('Error creating subscription:', error);
        throw error;  // Re-throw the error if you want the caller to know about it.
    }
}