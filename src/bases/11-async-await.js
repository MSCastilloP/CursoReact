const getImagen = async () => {
  try {
    const apiKey = "SZngJiL6VRHZHl4w6eYwI0QeRL8vUUVb";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
    console.log(data);
  } catch (error) {
    //manejo del error
    console.error(error);
  }
};

getImagen();

// const apiKey = "SZngJiL6VRHZHl4w6eYwI0QeRL8vUUVb";

// const peticion = fetch(
//   `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
// );

// peticion
//   .then((resp) => resp.json())
//   .then(({ data }) => {
//     const { url } = data.images.original;
//     const img = document.createElement("img");
//     img.src = url;
//     document.body.append(img);
//   })
//   .catch(console.warn);
