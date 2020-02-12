const algolia = document.getElementById('algolia');
algolia.addEventListener('keyup',(event)=>{
  searchPlaces(event.currentTarget.value);
});

const searchPlaces = (text) => {
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    body: JSON.stringify({ query: text })
  })
  .then(response => response.json())
  .then((data) =>{
    document.getElementById('place').innerText = data.hits[0].locale_names.default[0];
  });
}





const searchForm = document.getElementById('search-form');
searchForm.addEventListener('submit',(event)=>{
  event.preventDefault();
  const title = document.getElementById('search').value;
  searchMovie(title);
});


const searchMovie = (title) => {
  fetch(`http://www.omdbapi.com/?s=${title}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) =>{

      const ul = document.getElementById('movies');
      ul.innerHTML = '';
      data.Search.forEach((movie)=>{
        const li = `<li>
                      <img src="${movie.Poster}">
                      <p>${movie.Title}</p>
                    </li>`;
        ul.insertAdjacentHTML('beforeend',li);
      });

    })

}

