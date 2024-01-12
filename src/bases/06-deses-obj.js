//desestructuracion
// asiganacion desetructurante

const persona = {
  nombre: "tony",
  edad: 45,
  clave: "Ironman",
};
const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

// const retornaPersona = (usuario) => {
//   const { nombre, edad, clave } = usuario;
//   console.log(nombre, clave, edad);
// };
const retornaPersona = ({ clave, nombre, edad, rango = "capitan" }) => {
  //   console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 13.3423,
      lng: 123.454,
    },
  };
};

const avenger = retornaPersona(persona);

const {
  nombreClave,
  anios,
  latlng: { lat, lng },
} = avenger;

console.log(nombreClave, anios, lat, lng);
