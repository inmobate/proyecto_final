const {default: axios}=require('axios');
const mercadopago = require('mercadopago');
// APP_USR-8821606688782160-032709-875d0d91adfd7267daccb9c1620ffe25-1335999617
const {Property,Booking} = require('../db.js')

const access_token =
  "APP_USR-3948886778824840-032116-c7eeaf3582d0f56d4e9fb8898ceac2d3-1333790984";
const orden = async (req, res) => {
  try {
    mercadopago.configure({
      access_token: `${access_token}`,
    });
    const resv = await Booking.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!resv) {
      return res.status(404).send({
        message: "No se encontró ninguna recervacion",
      });
    }
    let preference = {
      items: [
        {
          id: resv.id,
          description: "resv.description",
          picture_url: "resv.picture",
          currency_id: "COP",
          unit_price: resv.total_price,
          quantity: 1,
        },
      ],
      notification_url: "https://b981-181-119-64-115.ngrok.io/notificacion",
    };
    const r = await mercadopago.preferences.create(preference);
    res.json(r.body.init_point);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const notification = async (req, res) => {
  const id = req.query.id;
  try {
    const response = await axios.get(
      `https://api.mercadopago.com/v1/payments/${id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    const status = response.data.status;
    res.status(200).json(`el estado de su pago es ${status}`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { orden, notification };
