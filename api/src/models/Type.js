const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Type",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey:true
      },
      icon: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
