// backend/controllers/paymentController.js
const Stripe = require("stripe");
const { PrismaClient } = require("@prisma/client");


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  const { courseId, userId, price, courseTitle } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: courseTitle,
            },
            unit_amount: price * 100, // cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/payment/success?courseId=${courseId}&userId=${userId}`,
      cancel_url: `${process.env.FRONTEND_URL}/courses/${courseId}`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
};

module.exports = { createCheckoutSession };
