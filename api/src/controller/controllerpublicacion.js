const { Publication } = require("../db");

const getPublication = async () => {
  const publicacion = await Publication.findAll({
    where: {
      soft_delete: false,
    },
  });
  return publicacion;
};

const getAllPublication = async () => {
  const publicacion = await Publication.findAll();
  return publicacion;
};

module.exports = { getPublication, getAllPublication };
