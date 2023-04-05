const { User } = require("../../db");

const userDelete = async (id, soft_delete) => {
  try {
    const user = await User.findOne({ where: { id: id } });

    const cambio = async () => {
      await User.update({ soft_delete: soft_delete }, { where: { id: id } });
    };
    if (!user.soft_delete) {
      //false = no esta eliminado
      cambio();
      return "User deleted";
    } else {
      cambio();
      return "User restored";
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = userDelete;
