const { Router } = require("express");
// const multer  = require('multer');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {
  allUsers,
  postUsers,
  postPublications,
  allPublications,
  allPropertyById,
  allProperty,
  allSale,
  allReservas,
  postComments,
  allServicios,
  allComments,
  postProperty,
  postSale,
  postBooking,
  putUsers,
  putPublications,
  putProperty,
  alltype,
  deleteComments,
  deletePublication,
  deleteUser,
  getAdmin,
  deleteAdmin,
} = require("../handler/handlerUser.js");
const {
  createOrden,
  capturarOrden,
  cancelarOrden,
} = require("../metodo_de_pagos/paypal");
const {
  redirectHome,
  redirectLogin,
  authenticateToken,
} = require("../middlewares/auth.js");
const { notification, orden } = require("../metodo_de_pagos/mercadoPago");
const { passport, authenticate } = require("../passport.js");
const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

const router = Router();

router.get("/property", allProperty); //lista
router.get("/property/:id", allPropertyById); //lista
router.post("/property", postProperty); // lista
router.put("/property/:id", putProperty); // lista

router.get("/type", alltype); //lista
router.get("/servicio", allServicios); //lista
//-------------------------------------------------
router.get("/sale", allSale); //lista
router.post("/sale", postSale); // ruta pendiente por revisar y definir que va hacer
//-------------------------------------------------
router.get("/booking", allReservas); //lista
router.post("/:id_usuario/:id_property/booking", postBooking); //lista

router.get("/users", allUsers); //lista
router.post("/users", postUsers); //lista
router.put("/users/:id", putUsers); //lista
router.put("/:id/users", deleteUser); //lista ruta que usara el admin

//--------------------------------------------------------------------------------//
// revisar y corregir
router.get("/comentarios", allComments); //lista
router.post("/:id_publication/comentarios", postComments); //lista
router.delete("/:id/comentarios", deleteComments); // no le voy a hacer, comentarlo al grupo

router.get("/publication", allPublications); //lista
router.post("/:id_autor/publication", postPublications); // lista
router.put("/:id/publication", putPublications);
router.delete("/:id/publication", deletePublication);
//--------------------------------------------------------------------------------//
router.get("/admin/?get=", getAdmin);
router.put("/admin/remove?=remove", deleteAdmin);

//------------------------------Auth----------------------------------------------------------------

const { User } = require("../db.js");

router.post("/login", passport.authenticate("local"), (req, res) => {
  try {
    let user = req.user;
    //Crear el token JWT con los datos del usuario.
    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
    };
    const token = jwt.sign(payload, "contraseña ", {
      expiresIn: "1d",
    });
    //Enviar respuesta al cliente con el access_token
    return res.json(token);
  } catch (e) {
    return res.status(500).json({ error: "Ha ocurrido un error." });
  }
});

router.get("/login", (req, res) => {
  res.send(`
      <h1>Iniciar sesión</h1>
      <form method='post' action='/login'>
        <input type='email' name='email' placeholder='Email' required />
        <input type='password' name='password' placeholder='Contraseña' required />
        <input type='submit' />
        <br/>
        <a href="/auth/google">Ingresar con google</a>
        <br/>
        <a href="/auth/facebook">Ingresar con Facebook</a>
      </form>
      <a href='/signup'>Registrarse</a>
    `);
});
router.post("/signup", (req, res) => {
  const { name, lastName, email, password } = req.body;

  if (name && email && password && lastName) {
    const exists = User.findAll((user) => user.email === email);
    if (!exists) {
      const user = {
        name,
        email,
        password,
      };
      User.Create(user);
      return res.redirect("/");
    }
  }
  res.redirect("/signup");
});

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
  (req, res) => {
    const user = req.user;
    payload = {
      id: user.id,
      email: user.email,
      name: user.name,
      lastName: user.lastName,
    };
    token = jwt.sign(payload, "process.env.JWT_SECRET_KEY", {
      expiresIn: "1d",
    });

    res.json(token);
  }
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/auth/failure" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  }
);
router.get("/auth/facebook", passport.authenticate("facebook"));

router.get(
  "/auth/facebook/callback",
  passport.authenticate(
    "facebook",
    { scope: ["email"] },
    { failureRedirect: "/login" }
  )
);
router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
//----------------------------------------paypal-----------------------------------

router.post("/create-order/:id", createOrden);

router.get("/capture-order", capturarOrden);

router.get("/cancel-order", cancelarOrden);

router.post("/orderPago/:id", orden);

router.post("/notificacion", notification);

module.exports = router;

//,
