const { User } = require("../../db");

const userDelete = async (id) => {
  try {
    const findUser = await User.update(
      { soft_delete: true },
      { where: { id: id } }
    );

    return "User deleted";
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = userDelete;
