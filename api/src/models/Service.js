const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Service",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
      },
      icon: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};