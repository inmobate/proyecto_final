const { Property } = require("../../db");

const propertyDelete = async (id) => {
  try {
    await Property.update({ soft_delete: true }, { where: { id: id } });
    return "Property deleted";
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = propertyDelete;
