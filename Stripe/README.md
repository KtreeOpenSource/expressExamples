# Stripe Functions Project

This project contains a set of functions to interact with the Stripe API for managing customers, subscriptions, coupons, and transactions.

## Functions Overview

### 1. createCustomer

This function creates a new customer in Stripe.

- **Input**: An object containing customer data including first name, last name, email, and phone number.
- **Output**: Returns a newly created customer object.

### 2. createSubscriptionPackage

This function creates a product in Stripe.

- **Input**: An object containing product data including name.
- **Output**: Returns a newly created product object.

### 3. createCoupon

This function creates a coupon in Stripe.

- **Input**: An object containing coupon data including name, discount type (percentage or fixed), and discount value.
- **Output**: Returns a newly created coupon object.

### 4. subscribeToPlan

This function subscribes a customer to a plan in Stripe.

- **Input**: Customer ID, Plan ID, optional trial days, and an optional coupon ID.
- **Output**: Returns a subscription object if successful.

### 5. getCustomerTransactions

This function retrieves transactions for a specific customer from Stripe.

- **Input**: Customer Stripe ID.
- **Output**: Returns a list of transaction objects.

## Usage

To use these functions:

1. Set up your Stripe account and obtain your API secret key.
2. Set your Stripe secret key as an environment variable named `STRIPE_SECRET_KEY`.
3. Import the desired function and call it with the required parameters.