const { DataTypes } = require("sequelize");


module.exports = (sequelize) => {
sequelize.define(
    "Sale",
    {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    sale_date:{
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    total_amount_sell:{
        type: DataTypes.INTEGER,
        allowNull: false,
    }
},
    {
    timestamps: false,
    }
);
};