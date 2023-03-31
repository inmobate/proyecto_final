const { Type } = require("../db.js");
const { type } = require("./tipos_de_propiedades");

const typeDb = async () => {
  const types = await Type.findAll();
  if (types.length <= 0) {
    const tipos = type.map((e) => {
      return {
        name: e.type,
        icon: e.icono,
      };
    });
    await Type.bulkCreate(tipos);
    return tipos;
  }
  return types;
};

module.exports = {
  typeDb,
};
