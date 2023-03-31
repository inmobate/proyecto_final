const { Sale } = require("../../db");

const NewPostSale = async (name, sale_date, total_amount_sell) => {
  try {
    
    if (!name || !sale_date || !total_amount_sell) throw new Error("Incomplete information");
    /* 
    
    */
   const sale = await Sale.create({
     name,
     sale_date,
     total_amount_sell,
    });
    
    return sale
  } catch (error) {

    return { error: error.message }; 
    
  }
    
};

module.exports = NewPostSale;