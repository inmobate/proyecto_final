const{Service}=require('../db.js')
const {servicios} = require('./servicios')


const servicioDb = async () => {
  const serv = await Service.findAll();
  if (serv.length <= 0) {
    const servic = servicios.map((e) => {
      return {
        name: e.servicio,
        icon: e.icono
      };
    });
    await Service.bulkCreate(servic);
    return servic;
  }
  return serv;
}

module.exports = {
  servicioDb
}