// eslint-disable-next-line no-unused-expressions
import.meta.env.API_KEY;

async function getData(inputVal, titleLen) {
  const resp = await fetch(

    // eslint-disable-next-line no-undef
    'http://www.omdbapi.com/?i=tt3896198&apikey=5ca0070c',
  );

  const data = await resp.json();

  // eslint-disable-next-line no-console
  console.log(data);
  const searchRes = data.Search;

  // eslint-disable-next-line no-console
  console.log(searchRes);

  // eslint-disable-next-line no-console
  console.log(`this is your title: ${titleLen}`);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < searchRes.length; i++) {
    // eslint-disable-next-line no-console
    console.log(`this is data: ${searchRes[i].Title}`);

    // eslint-disable-next-line no-undef, vars-on-top, no-var, block-scoped-var
    var url = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=VITE_API_KEY`;

    // eslint-disable-next-line no-console, block-scoped-var
    console.log(`this is your URL ${url}`);
    // eslint-disable-next-line block-scoped-var
    const titleResp = fetch(`${url}`);
    const titleData = titleResp.json();

    // eslint-disable-next-line no-console
    console.log(titleData.title);

    // eslint-disable-next-line no-console
    console.log(titleData.Ratings);

    const ratings = titleData.Ratings;

    // eslint-disable-next-line no-shadow, no-plusplus
    for (let i = 0; i < ratings.length; i++) {
      // eslint-disable-next-line no-console
      console.log(`${ratings[i].Source} : ${ratings[i].Value}`);
      const maincon2 = document.getElementById('main_con');
      const rating = document.createElement('p');
      rating.textContent = `${ratings[i].Source} : ${ratings[i].Value}`;
      maincon2.appendChild(rating);
    }

    // eslint-disable-next-line global-require
    require('dotenv').config();
    // eslint-disable-next-line no-console
    console.log(process.env);

    // eslint-disable-next-line vars-on-top, no-var
    var input;

    // eslint-disable-next-line vars-on-top, no-var, no-redeclare
    var url = 'api + movie + apiKey';
    // eslint-disable-next-line no-undef
    const button = select('#submit');
    // eslint-disable-next-line no-undef
    button.mousePressed(titleAsk);

    // eslint-disable-next-line no-unused-vars, no-undef
    input = select('#movie');
  }

  // console.log(Search.Title)
  const mainCon = document.getElementById('main_con');
  // console.log(data.Search[i])

  const imgCont = document.createElement('div');
  const imgTag = document.createElement('img');
  const movieID = document.createElement('p');
  const title = document.createElement('p');
  const year = document.createElement('p');

  // eslint-disable-next-line no-undef
  imgTag.src = searchRes[i].Poster;
  imgTag.setAttribute('style', 'width: 500px');

  // eslint-disable-next-line no-undef
  title.textContent = searchRes[i].Title;
  // eslint-disable-next-line no-undef
  movieID.textContent = searchRes[i].imdbID;
  // eslint-disable-next-line no-undef
  year.textContent = searchRes[i].Year;
  // eslint-disable-next-line no-undef
  title.textContent = titleData.title;

  imgCont.appendChild(imgTag);

  mainCon.appendChild(title);
  mainCon.appendChild(movieID);
  mainCon.appendChild(year);
  mainCon.appendChild(imgCont);
}

const button = document.getElementById('button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const inputVal = document.getElementById('movie_search').value;

  const title = document.querySelector(
    'input[type=radio][name=title_length]:checked',
  );
  const titleLen = title.value;

  // eslint-disable-next-line no-console
  console.log(`this is title length 3: ${titleLen}`);
  getData(inputVal, titleLen);
  // getData(titleLen);
});
