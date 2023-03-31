const { Booking } = require("../../db");

const bookingDelete = async (id) => {
  try {
    const delBooking = await Booking.destroy({
      where: {
        id: id,
      },
    });

    return "Bookind Deleted";
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = bookingDelete;
