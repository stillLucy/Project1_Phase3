/* eslint-disable no-plusplus */
// eslint-disable-next-line no-unused-vars
const apiKey = import.meta.env.VITE_API_KEY;
async function getData(inputVal, plotLen) {
  const resp = await fetch(
    'https://www.omdbapi.com/?i=tt3896198&apikey=5ca0070c',
  );
  const data = await resp.json();
  // eslint-disable-next-line no-console
  console.log(data);
  const searchRes = data.Search;
  // eslint-disable-next-line no-console
  console.log(searchRes);
  // eslint-disable-next-line no-console
  console.log(`this is your pltLen: ${plotLen}`);
  for (let i = 0; i < searchRes.length; i++) {
    // eslint-disable-next-line no-console
    console.log(`this is data: ${searchRes[i].Title}`);

    const plotUrl = 'https://www.omdbapi.com/?i=tt3896198&apikey=5ca0070c';
    // eslint-disable-next-line no-console
    console.log(`this is your plotURl ${plotUrl}`);
    const plotResp = fetch(`${plotUrl}`);
    const plotData = plotResp.json();
    // eslint-disable-next-line no-console
    console.log(plotData.Plot);
    // eslint-disable-next-line no-console
    console.log(plotData.Ratings);

    const ratings = plotData.Ratings;

    // eslint-disable-next-line no-shadow
    for (let i = 0; i < ratings.length; i++) {
      // eslint-disable-next-line no-console
      console.log(`${ratings[i].Source} : ${ratings[i].Value}`);
      const maincon2 = document.getElementById('main_con');
      const raiting = document.createElement('p');
      raiting.textContent = `${ratings[i].Source} : ${ratings[i].Value}`;
      maincon2.appendChild(raiting);
    }

    // console.log(Search.Title)
    const mainCon = document.getElementById('main_con');
    // console.log(data.Search[i])

    const imgCont = document.createElement('div');
    const imgTag = document.createElement('img');
    const movieID = document.createElement('p');
    const title = document.createElement('p');
    const year = document.createElement('p');
    const plot = document.createElement('p');

    imgTag.src = searchRes[i].Poster;
    imgTag.setAttribute('style', 'width: 500px');

    title.textContent = searchRes[i].Title;
    movieID.textContent = searchRes[i].imdbID;
    year.textContent = searchRes[i].Year;
    plot.textContent = plotData.Plot;

    imgCont.appendChild(imgTag);

    mainCon.appendChild(title);
    mainCon.appendChild(movieID);
    mainCon.appendChild(year);
    mainCon.appendChild(imgCont);
    mainCon.appendChild(plot);
  }
}

const button = document.getElementById('button');
button.addEventListener('click', (e) => {
  e.preventDefault();
  const inputVal = document.getElementById('movie_search').value;

  const plot = document.querySelector(
    'input[type=radio][name=plot_length]:checked',
  );
  const plotLen = plot.value;
  // eslint-disable-next-line no-console
  console.log(`this is plot lenth 3: ${plotLen}`);
  getData(inputVal, plotLen);
  // getData(plotLen);
});
