const { Property } = require("../../db");

const propertyDelete = async (id, soft_delete) => {
  try {
    const update = await Property.update(
      { soft_delete: soft_delete },
      { where: { id: id } }
    );

    const property = await Property.findOne({ where: { id: id } });
    if (!property.soft_delete) {
      return "Property restored";
    } else {
      return "Property deleted";
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = propertyDelete;
