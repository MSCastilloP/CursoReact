const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: { ciudad: "new York", zip: 55213, lat: 14.2312, lng: 1231 },
};
console.log({ persona: persona });
// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "peter";
console.log(persona2);
