const url =
  "https://api.nasa.gov/planetary/apod?api_key=PJjExtjweN3FXhAo1G5RRhGF14aekW37t0PxyqNJ&count=15";

async function listaImagenes() {
  try{
    let fetchImagen = await fetch(url);
    let datosImagenes = await fetchImagen.json();

    const card = document.querySelector('[data-ul]')
    datosImagenes.forEach((elemento) => {
      const contenido = `
      <li class="card">
        <img class="card__image" src="${elemento.url}" alt="imagen">
        <h3 class="card__title">${elemento.title}</h3>
      </li>`;
      card.insertAdjacentHTML("beforeend", contenido);
    });
  }
  catch (error){
    console.log(error);
  }
}

listaImagenes()
