const bcrypt = require("bcrypt");
const newPostComment = require("./post/postComments.js");
const newPostPublication = require("./post/postPublications.js");
const jwt = require("jsonwebtoken");

const newPostBooking = require("./post/postBooking.js");
const newPostSale = require("./post/postSale.js");
const updateUser = require("./put/UpdateUser.js");
const updatePublication = require("./put/updatePublication.js");

const bookingDelete = require("./delete/deleteBooking.js");
const { Op, Property, Service, Type, User, Booking } = require("../db");
const { getUser, getAllUser } = require("../controller/controllerUsers");
const {
  getComentario,
  getAllComentario,
} = require("../controller/controllerComment.js");
const { getReservas } = require("../controller/controllerBooking");
const {
  getPublication,
  getAllPublication,
} = require("../controller/controllerpublicacion");
const { getVentas } = require("../controller/controllerSale");
const { propertyById } = require("../controller/controllerProperty");
const { typeDb } = require("../controller/controllerType");
const CommentDelete = require("../handler/delete/deleteCommit.js");
const propertyDelete = require("./delete/deleteProperty.js");
const userDelete = require("../handler/delete/deleteUser.js");
// const {where}=require("sequelize");

const allProperty = async (req, res) => {
  const datos = await Property.findAll({
    include: [
      {
        model: Service,
        attributes: ["name", "icon"],
        through: { attributes: [] },
      },
    ],
  });
  const { city, province, page, size, minPrice, maxPrice, type } = req.query;

  switch (true) {
    case type !== undefined:
      const filterType = datos.filter((el) => {
        return el.type === type;
      });
      return res.json(filterType);

    case minPrice !== undefined && maxPrice !== undefined:
      const filterPrice = datos.filter((el) => {
        return el.price >= minPrice && el.price <= maxPrice;
      });
      return res.json(filter);

    case page !== undefined && size !== undefined:
      let options = {
        limit: +size,
        offset: +page * +size,
      };
      const { count, rows } = await Property.findAndCountAll(options);
      return res.json({
        total: count,
        properties: rows,
      });

    case city !== undefined:
      let propertyCity = await Property.findAll({
        where: {
          city: { [Op.iLike]: `%${city}%` },
        },
        include: [
          {
            model: Service,
            attributes: ["name", "icon"],
            through: { attributes: [] },
          },
        ],
      });
      return res.status(200).json(propertyCity);

    case province !== undefined:
      let propertyProvince = await Property.findAll({
        where: {
          province: { [Op.iLike]: province },
        },
        include: [
          {
            model: Service,
            attributes: ["name", "icon"],
            through: { attributes: [] },
          },
          {
            model: PropertyType,
            attributes: ["name"],
          },
        ],
      });
      return res.status(200).json(propertyProvince);

    default:
      return res.status(200).json(datos);
  }
};
const allPropertyById = async (req, res) => {
  const { id } = req.params;
  console.log(req.params);
  try {
    const datos = await Property.findOne({
      where: { id },
      include: [
        {
          model: Service,
          through: { attributes: [] },
        },
      ],
    });

    res.status(200).json(datos);
  } catch (error) {
    console.log(error);
    res.status(400).json({ Error: "error.id no esta" });
  }
};

const postProperty = async (req, res) => {
  const {
    price, //
    description, //
    bathrooms, //
    room, //
    title, //
    city,
    province,
    address,
    pictures, //
    type, //
    service, //
    beds, //
  } = req.body;
  try {
    if (
      !description &&
      !price &&
      !bathrooms &&
      !city &&
      !province &&
      !address &&
      !room &&
      !title &&
      !pictures &&
      !beds
    ) {
      res.status(404).json({
        message: "falta informacion para crear una propiedad",
      });
    } else {
      let newproperty = await Property.create({
        description,
        price,
        bathrooms,
        city,
        province,
        address,
        room,
        title,
        pictures,
        beds,
        type,
      });

      const services = await Service.findAll({ where: { name: service } });
      const types = await Type.findOne({ where: { name: type } });
      newproperty.addService(services);
      newproperty.setType(types);

      console.log(newproperty);

      res.status(201).json(newproperty);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const putProperty = async (req, res) => {
  const {
    description,
    area,
    price,
    bathrooms,
    floor,
    country,
    city,
    province,
    address,
    postal_code,
    room,
    title,
    pictures,
    type,
    service,
  } = req.body;

  try {
    const updatedProperty = await Property.update(
      {
        description,
        area,
        price,
        bathrooms,
        floor,
        country,
        city,
        province,
        address,
        postal_code,
        room,
        title,
        pictures,
        type,
        service,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    console.log(updatedProperty);
    res.status(200).json(`la propiedad  fue modificada con exito`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const allUsers = async (req, res) => {
  const users = await getUser();
  try {
    res.status(200).json({ usuarrios: users });
  } catch (error) {
    res.status(400).json({ Error: error.menssage });
  }
};

const postUsers = async (req, res) => {
  const { id, name, lastName, email } = req.body;
  const usuario = await User.findOne({ where: { email: email } });
  try {
    if (!usuario) {
      // hash = await bcrypt.hash(password, 16);
      const newPost = await User.create({
        name,
        lastName,
        email,
        id,
        // password: hash,
      });
      res.status(201).send(newPost);
    } else {
      res.status(200).json(usuario);
    }
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const putUsers = async (req, res) => {
  const { name, lastName, email, password } = req.body;
  console.log(req.body);
  console.log("id del usuario ", req.params.id);
  try {
    const updatedUser = await User.update(
      {
        name,
        lastName,
        email,
        password,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(`el usuaro fue modificada con exito`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteuser = await userDelete(id);
    res.status(200).json(deleteuser);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const allComments = async (req, res) => {
  const comments = await getComentario();
  try {
    res.status(200).json({ comentarios: comments });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const postComments = async (req, res) => {
  const { id_publication } = req.params;
  const { content, id_user } = req.body;
  try {
    const newComment = await newPostComment(content, id_user, id_publication);
    res.status(200).json(newComment);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const deleteComments = async (req, res) => {
  const { id } = req.params;
  try {
    const commentsdelete = await CommentDelete(id);
    res.status(200).json(commentsdelete);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const allPublications = async (req, res) => {
  const publicacion = await getPublication();
  try {
    res.status(200).json({ publi: publicacion });
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const putPublications = async (req, res) => {
  const { description, picture, public_data, title, autor } = req.body;
  const { id } = req.params;
  try {
    const newPublication = await updatePublication(
      id,
      description,
      picture,
      public_data,
      title,
      autor
    );
    res.status(200).send(newPublication);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const postPublications = async (req, res) => {
  const { active, description, picture, public_data, title } = req.body;
  const { id_autor } = req.params;
  try {
    const newPublication = await newPostPublication(
      active,
      description,
      picture,
      public_data,
      title,
      id_autor
    );
    console.log(newPublication);
    res.status(200).json(newPublication);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const deletePublication = async (req, res) => {
  const { id } = req.params;
  try {
    const deletePublic = await propertyDelete(id);
    res.status(200).json(deletePublic);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const allReservas = async (req, res) => {
  const reserva = await getReservas();
  try {
    res.status(200).json(reserva);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const allSale = async (req, res) => {
  const ventas = await getVentas();
  try {
    res.status(200).json(ventas);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const postSale = async (req, res) => {
  const { name, sale_date, total_amount_sell } = req.body;
  try {
    const newsale = await newPostSale(name, sale_date, total_amount_sell);
    res.status(200).json(newsale);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const allBooking = (req, res) => {
  res.status(200).json({ mensaje: "en esta ruta veremos todos las reservas" });
};

const postBooking = async (req, res) => {
  const { date_of_admission, departure_date, total_price } = req.body;
  const { id_property } = req.params;

  // Obtener el token de autenticación de los encabezados de autorización
  // const token = req.headers.authorization.split(" ")[1];
  try {
    // Decodificar el token para obtener la información del usuario
    // const decodedToken = jwt.verify(token, "contraseña ");
    // Crear el registro de reserva y asignar el id del usuario autenticado
    const newBooking = await Booking.create(
      {
        date_of_admission,
        departure_date,
        total_price,
        id_property,
        // user_id: usuario, // propiedad agregada para unificar el id del usuario
      },
      {
        where: {
          id: req.params,
          id: req.params,
        },
      }
    );
    console.log(req.params);
    res.status(200).json(newBooking);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const bookingdelete = await bookingDelete(id);
    res.status(200).json(bookingdelete);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const alltype = async (req, res) => {
  const type = await typeDb();
  try {
    res.status(200).json(type);
  } catch (error) {
    res.status(400).json({ Error: error.message });
  }
};

const allServicios = async (req, res) => {
  const servicios = await Service.findAll();
  try {
    res.status(200).json(servicios);
  } catch (error) {
    res.status(400).json({ Error: error.menssage });
    res.status(404).json({ error: menssage });
  }
};

//------------------------------------------------------------------------------------------------------------------------------
const getAdmin = async (req, res) => {
  const { get } = req.query;
  try {
    if (get === "Users") {
      const users = await getAllUser();
      res.status(200).json({ Users: users });
    }
    if (get === "Comments") {
      const comments = await getAllComentario();
      res.status(200).json({ comentarios: comments });
    }
    if (get === "Publication") {
      const publicacion = await getAllPublication();
      res.status(200).json({ publi: publicacion });
    }
  } catch (error) {
    res.status(404).json({ error: menssage });
  }
};

const deleteAdmin = async (req, res) => {
  const { remove } = req.query;
  const { id } = req.params;
  
  try {
    if (remove === "User") {
      const deleteuser = await userDelete(id);
      res.status(200).json(deleteuser);
    }
    if (remove === "Comments") {
      const commentsdelete = await CommentDelete(id);
      res.status(200).json(commentsdelete);
    }
    if (remove === "property") {
      const deletePublic = await propertyDelete(id);
      res.status(200).json(deletePublic);
    }
  } catch (error) {
    res.status(404).json({ error: menssage });
  }
};

module.exports = {
  allUsers,
  postUsers,
  putUsers,
  allComments,
  postComments,
  allPublications,
  postPublications,
  putPublications,
  allProperty,
  allSale,
  allBooking,
  postBooking,
  deleteBooking,
  alltype,
  allServicios,
  allReservas,
  allPropertyById,
  postProperty,
  putProperty,
  postSale,
  deleteComments,
  deletePublication,
  deleteUser,
  getAdmin,
  deleteAdmin,
};
