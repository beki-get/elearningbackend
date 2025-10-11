// backend/controllers/paymentController.js
const Stripe = require("stripe");
const { PrismaClient } = require("@prisma/client");




const createCheckoutSession = async (req, res) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const { courseId, userId, price, courseTitle } = req.body;

  try {
    const { courseTitle, price } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: courseTitle },
            unit_amount: price * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/payment/success",
      cancel_url: "http://localhost:3000/payment/cancel",
    });

    res.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createCheckoutSession };
