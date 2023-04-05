const { User } = require("../db");
const usersdata = require("./dataUser");

const getUser = async () => {
  const usuarios = await User.findAll();
  if (!usuarios.length) {
    const info = usersdata.map((e) => {
      return {
        id: e.id,
        name: e.name,
        lastName: e.lastName,
        email: e.email,
        soft_delete: e.soft_delete,
      };
    });
    return info;
  }
  return usuarios;
};

const saveUserData = async () => {
  const api = await getUser();
  await User.bulkCreate(api)
    .then(() => console.log("Users created successfully!"))
    .catch((error) => console.error("Error creating Users:", error));
};

const userById = async (id) => {
  const user = await User.findOne({
    where: { id: id },
  });
  return user;
};

module.exports = { getUser, userById, saveUserData };
