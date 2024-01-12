const personajes = ["Goku", "Vegueta", "Trunks"];
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);

const [p1, , p2] = personajes;
console.log(p1, p2);

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const prueba = (valor) => {
  return [
    valor,
    () => {
      console.log("hola mundo");
    },
  ];
};

const arr = prueba("goku");
const [nombre, setNombre] = arr;

console.log(nombre);
setNombre();
