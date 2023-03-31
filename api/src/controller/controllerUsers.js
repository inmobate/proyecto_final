const { User } = require("../db");

const getUser = async () => {
  const usuarios = await User.findAll({
    where: {
      soft_delete: false,
    },
  });
  return usuarios;
};

const getAllUser = async () => {
  const usuarios = await User.findAll();
  return usuarios;
};

module.exports = { getUser, getAllUser };
