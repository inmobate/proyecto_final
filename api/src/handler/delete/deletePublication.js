const { Publication } = require("../../db");

const publicationDelete = async (id) => {
  try {
    const findPublication = await Publication.update(
      { soft_delete: true },
      { where: { id: id } }
    );
    return "Publication deleted";
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = publicationDelete;
