const { Property } = require("../../db");

const propertyDelete = async (id, soft_delete) => {
  try {
    const property = await Property.findOne({ where: { id: id } });
    const cambio = async () => {
      await Property.update(
        { soft_delete: soft_delete },
        { where: { id: id } }
      );
    };
    if (!property.soft_delete) {
      //false = no esta eliminado
      cambio();
      return "Property deleted";
    } else {
      cambio();
      return "Property restored";
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = propertyDelete;
