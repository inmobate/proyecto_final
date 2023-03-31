const{Property,Service,Type}=require('../db.js')
const {data} = require('./data')
const { type } = require("./tipos_de_propiedades");
const { servicios } = require("./servicios");

const property = async () => {
  const properties = await Property.findAll()
  const name = type.map((x) => x.type)
  const servi = servicios.map((x) => x.servicio);
  if(properties.length <= 0){
    const info = data.map((e)=> {
        return {
          price: e.price,
          description: e.detail,
          bathrooms: e.banos,
          room: e.habitacion,
          floor: e.piso,
          title: e.title,
          area: e.area,
          city: e.ciudad,
          province: e.provincia,
          postal_code: e.codigo_postal,
          address: e.address,
          pictures: e.picture.map((e) => e),
          type: name[Math.floor(Math.random() * (name.length - 0) + 0)]
        };
      })
      info.forEach(async(x)=>{
        const propiedades = await Property.create(x)
        const serv = Array(Math.floor(Math.random() * (servi.length - 1) + 1))
        let  result = servi.slice();
        
        for(let i = 0 ; i < serv.length ; i++){
          const s = result[Math.floor(Math.random() * (result.length - 0) + 0)];
          serv[i] = s
          result = result.filter((x)=>x!== s)
        }
        const servicio = await Service.findAll({
          where: {
            name: serv,
          },
        });
        propiedades.addServices(servicio);
      })
  return info 
  }
  return properties
}

const propertyById = async (id) => {
  const properties = await Property.findOne({
    where: { id: id },
    include: [
      {
        model: Service,
        attributes: ["name", "icon"],
        through: { attributes: [] },
      },
    ],
  });
  return properties;
};

module.exports = {
    property,
    propertyById
}