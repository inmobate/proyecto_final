require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Sale, Publication, Comment, Booking, Property, Service, Type } =
  sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
User.hasMany(Publication, { foreignKey: "autorId" });
Publication.belongsTo(User, { foreignKey: "autorId" });

User.hasMany(Property, { foreignKey: "UserProperty" });
Property.belongsTo(User, { foreignKey: "UserProperty" });

Property.hasMany(Comment, { foreignKey: "property_id", sourceKey: "id" });
Comment.belongsTo(Publication, { foreignKey: "property_id", targetKey: "id" });

User.hasMany(Comment, { foreignKey: "user_id", sourceKey: "id" });
Comment.belongsTo(User, { foreignKey: "user_id", targetKey: "id" });

User.hasMany(Booking, { foreignKey: "autor_booId", sourceKey: "id" });
Booking.belongsTo(User, { foreignKey: "autor_booId", targetKey: "id" });

Booking.hasOne(Property, { foreignKey: "autor_propId", sourceKey: "id" });
Property.belongsTo(Booking, { foreignKey: "autor_propId", targetKey: "id" });

Sale.hasMany(Booking, { foreignKey: "autor_saleId", sourceKey: "id" });
Booking.belongsTo(Sale, { foreignKey: "autor_saleId", targetKey: "id" });

Sale.hasOne(Property, { as: "propiedades", foreignKey: "saleId" });
Property.belongsTo(Sale, { as: "ventas", foreignKey: "saleId" });

Property.belongsToMany(Service, { through: "servi_propiedad" });
Service.belongsToMany(Property, { through: "servi_propiedad" });

Type.hasMany(Property, { foreignKey: "type" });
Property.belongsTo(Type, { foreignKey: "type", field: "name" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  Op,
};
