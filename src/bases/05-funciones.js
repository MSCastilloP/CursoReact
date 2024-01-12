const saludar = function (nombre) {
  return `hola, ${nombre}`;
};

const saludar2 = (nombre) => {
  return `hola, ${nombre}`;
};

const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => `hola, mundo`;

console.log(saludar("goku"));
console.log(saludar);
console.log(saludar2("Vegueta"));
console.log(saludar3("Vegueta"));
console.log(saludar4());

const getUser = () => {
  return {
    uid: "1231",
    username: "santiago",
  };
};

const getUser2 = () => ({
  uid: "1231",
  username: "santiago",
});

console.log(getUser());
console.log(getUser2());

const getUsuarioActivo = (nombre) => ({
  uisd: "ABCD123",
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Santiago");
console.log(usuarioActivo);
