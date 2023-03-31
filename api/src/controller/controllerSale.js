const {Sale} = require('../db')


const getVentas = async() => {
    const Ventas = await Sale.findAll()
    return Ventas
}

module.exports = {getVentas}