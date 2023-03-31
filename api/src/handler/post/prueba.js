// const newPostProperty = async (
//   description,
//   area,
//   price,
//   bathrooms,
//   floor,
//   city,
//   province,
//   address,
//   postal_code,
//   room,
//   title,
//   pictures,
//   type,
//   service
// ) => {
//   try {
//     const property = await Property.create({
//       description,
//       area,
//       price,
//       bathrooms,
//       floor,
//       city,
//       province,
//       address,
//       postal_code,
//       room,
//       title,
//       pictures,
//       beds,
//     });
//     console.log("1", property);
//     // await property.addService(service);
//     // await property.addType(type);
//     console.log("2", property);
//     return property;
//   } catch (error) {
//     return { error: error.message };
//   }
// };
