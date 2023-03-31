const { Comment } = require("../db");

const getComentario = async () => {
  const comentarios = await Comment.findAll({
    where: {
      soft_delete: false,
    },
  });
  return comentarios;
};

const getAllComentario = async () => {
  const comentarios = await Comment.findAll();
  return comentarios;
};

module.exports = { getComentario, getAllComentario };
