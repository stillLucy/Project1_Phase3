document.querySelector('#app').innerHTML = `
  <h1>Movie Locator</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank"></a>
`;
const search = (ev) => {
  ev.preventDefault();
  const title = document.querySelector("#title").value;
  const year = document.querySelector("#year").value;
  const imdb= document.querySelector("#imdb").value;
  const url = `https://www.omdbapi.com/?t=${title}&y=${year}&imdb=${imdb}&apikey=5ca0070c`;

  //const api_key = process.env.API_KEY;

  //require('dotenv').config();

  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const parent = document.querySelector("#movie-details");
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
      const movieTemplate = `
    
  <h2>${data.Title}</h2>
  <p>${data.Year}</p>
  <img src="${data.Poster}" alt= "poster image"/>
  <p>${data.imdb}</p>
  
  `;
      document
        .querySelector("#movie-details")
        .insertAdjacentHTML("beforeend", movieTemplate);
      

      console.log(data.Title);
      console.log(data.Poster);
    });
};

document.querySelector("form").addEventListener("submit", search);
