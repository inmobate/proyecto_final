const {Booking} = require('../db')


const getReservas = async() => {
    const reservas = await Booking.findAll()
    return reservas
}

module.exports = {getReservas}