// const { Publication } = require("../../db");

// const updatePublication = async (
//   id,
//   description,
//   picture,
//   public_data,
//   title
// ) => {
//   try {
//     const findpubication = await Publication.findByPk(id);
//     if (!findpubication) throw new Error("Property not found");
//     else {
//       description
//         ? await Property.update({ description: description })
//         : findpubication.description;
//       picture
//         ? await Property.update({ picture: picture })
//         : findpubication.picture;
//       public_data
//         ? await Property.update({ public_data: public_data })
//         : findpubication.public_data;
//       title ? await Property.update({ title: title }) : findpubication.title;
//     }

//     const newpubication = await Publication.findByPk(id);

//     return newpubication;
//   } catch (error) {
//     return { error: error.message };
//   }
// };

// module.exports = updatePublication;
