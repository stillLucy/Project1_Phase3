import .meta.env.VITE_API_KEY 

//Search Options
const form = document.getElementById('form')
const title = document.getElementById('title');
const year = document.getElementById('year');
const imdb = document.getElementByyId('imdb');
const input = document.getElementByyId('input');
const errorElement = document.getElementById('error')

// Show Success
function showSuccess(input) {
formControl = input.parentElement;
formControl.className = 'form-control success';
//Event Listener
form.addEventListener('submit', (e) => {
let messages = []

if (title.value === '') {
messages.push("Title is required");
} else {
showSuccess(title);

}
if (year.value >=2023) {
messages.push("Please Select Relevant Year");
} else {
showSuccess(year);

e. preventDefault()
errorElement.innerText = messages.join(', ')

}
})
//Load Movies From OMDB API


async function loadMovies(searchTerm) {
  const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=VITE_API_KEY`;
  const res = await fetch(`${URL}`);
  const data = await res.json();
  //   console.log(data.Search);
  if (data.Response == "True") displayMovieList(data.Search);
}

function findMovies() {
    
  let searchTerm = 
const title = title.value.trim()

    let searchTermYear = 
const year = year.value.trim();
    
  let searchTermId = 
const imdb = imdb.value.trim();

 //searchTerm
  if (searchTerm.length > 0) {
    searchTitle.classList.remove("hide-list");
    loadMovies(searchTerm);
  } else {
    searchTitle.classList.add("hide-list");
  }
  //searchTermYear
  if (searchTermYear.length > 0) {
    searchYear.classList.remove("hide-list");
    loadMovies(searchTermYear);
  } else {
    searchYear.classList.add("hide-list");
  }
}

function displayMovieList(movies) {
  searchTitle.textContent = "";
  for (let idx = 0; idx < movies.length; idx++) {
    let movieListItem = document.createElement("div");
    movieListItem.dataset.id = movies[idx].imdbID; 
    movieListItem.classList.add("list-item");
    if (movies[idx].Poster != "N/A") moviePoster = movies[idx].Poster;
    else moviePoster = "image_not_found.png";

    movieListItem.textContent = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        `;
    searchTitle.appendChild(movieListItem);
    searchYear.appendChild(movieListItem);
  }
  loadMovieDetails();
}

function loadMovieDetails() {
  const searchListMovies = searchTitle.querySelectorAll(".list-item");
  searchListMovies.forEach((movie) => {
    movie.addEventListener("click", async () => {
      // console.log(movie.dataset.id);
      searchTitle.classList.add("hide-list");
      searchYear.classList.add("hide-list");
      movieTitle.value = "";
      const result = await fetch(
        `http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=VITE_API_KEY`
      );
      const movieDetails = await result.json();
      // console.log(movieDetails);
      displayMovieDetails(movieDetails);
    });
  });
}

function displayMovieDetails(details) {
  resultGrid.textContent = `
    <div class = "movie-poster">
        <img src = "${
          details.Poster != "N/A" ? details.Poster : "image_not_found.png"
        }" alt = "movie poster">
    </div>
    <div class = "movie-information">
        <h3 class = "movie-title">${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year">Year: ${details.Year}</li>
            <li class = "rated">Ratings: ${details.Rated}</li>
            <li class = "released">Released: ${details.Released}</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <p class = "actors"><b>Actors: </b>${details.Actors}</p>
        <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${
          details.Awards
        }</p>
    </div>
    `;
}

window.addEventListener("click", (event) => {
  if (event.target.className != "form-control") {
    searchTitle.classList.add("hide-list");
    searchYear.classList.add("hide-list");
  }
});


	}
})

