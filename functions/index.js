const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request } = require("express");
const { response } = require("express");
const stripe = require("stripe")("sk_test_51L1kT6A7h47aBarNVeiy7NllgTQkOS0r8FtPYuVWlbnYzh67IYDfZtpFdOd0fpoJKEm8s7AxyWhUQzievgna9JE200erC6hU70")


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());


app.get('/', (request, response) => response.status(200).send('Hello, World!'))
app.post('/payments/create ', async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>>", total)

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  })

})

exports.api = functions.https.onRequest(app)
