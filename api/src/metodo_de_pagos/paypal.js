const axios = require('axios');
const { PAYPAL_API, PAYPAL_API_SECRET, PAYPAL_API_CLIENT, URL} = process.env;
const {Booking,Property} = require ('../db')



const createOrden = async (req, res) => {
  const resv = await Property.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (!resv) {
    return res.status(404).send({
      message: "No se encontró ninguna recervacion",
    });
  }
  try {
    let order = {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: resv.price,
            name: "resv.title",
          },
          item_list: {
            items: [
              {
                name: "resv.title",
                description: "resv.description",
                quantity: 1,
              },
            ],
          },
          description: "alquiler de propiedad",
        },
      ],
      application_context: {
        brand_name: "inmovate",
        landing_page: "LOGIN",
        user_action: "PAY_NOW",
        return_url: "http://localhost:3001/capture-order",
        cancel_url: "http://localhost:3001/cancel-order",
      },
    };

    const params = new URLSearchParams();
    params.append("grant_type", "client_credentials");

    const {
      data: { access_token },
    } = await axios.post(
      "https://api-m.sandbox.paypal.com/v1/oauth2/token",
      params,
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

    const response = await axios.post(
      "https://api-m.sandbox.paypal.com/v2/checkout/orders",
      order,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    res.status(200).send(response.data.links[1].href);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const capturarOrden = async (req, res) => {
  const { token } = req.query;
  console.log(req.query.token);
  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/order/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );
    res.json("pagado");
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ error: error.message });
  }
};
const cancelarOrden = (req, res) => {
  res.redirect("/booking");
};

module.exports = {
  createOrden,
  capturarOrden,
  cancelarOrden,
};