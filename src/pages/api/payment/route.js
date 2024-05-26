import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

/**
 * Function used to pay the glorious Cato what he deserves.
 * @param   {NextRequest}  req The request from the NExt.js server.
 * @returns {NextResponse}     Returns an HTML response to the app.
 */
export default async function PayCato(req) {
  const { data } = await req.json();
  const { amount } = data;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Number(amount) * 100, // Stripe only usees cents
      currency: 'USD'
    });

    return new NextResponse(paymentIntent.client_secret, { status: 200 });
  } catch (error) {
    return new NextResponse(error, {
      status: 400
    });
  }
}
