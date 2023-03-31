const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Booking",
    {
      date_of_admission: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      departure_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      total_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
