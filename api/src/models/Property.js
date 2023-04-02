const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Property",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      area: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 2000,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bathrooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      floor: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 1,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Argentina",
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      postal_code: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "p00001",
      },
      room: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      pictures: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      beds: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      soft_delete: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
