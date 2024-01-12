import { getHeroesById } from "./bases/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve();
//     const heroe = getHeroesById(2);
//     resolve(heroe);
//     // reject("No se pudo encontrar el héroe");
//   }, 2000);
// });

// promesa
//   .then((heroe) => {
//     console.log("heroe", heroe);
//   })
//   .catch((err) => console.warn(err));

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve();
//     const heroe = getHeroesById(2);
//     if (heroe != undefined) {
//       resolve(heroe);
//     } else {
//       reject("No se pudo encontrar el héroe");
//     }

//     //
//   }, 2000);
// });

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve();
      const heroe = getHeroesById(id);
      if (heroe != undefined) {
        resolve(heroe);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
};

getHeroeByIdAsync(1).then(console.log).catch(console.warn);
