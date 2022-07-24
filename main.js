// eslint-disable-next-line no-unused-expressions
import.meta.env.VITE_API_KEY;

async function getData(inputVal, titleLen) {
  const resp = await fetch(

    // eslint-disable-next-line no-undef
    `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=VITE_API_KEY`,
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

    // eslint-disable-next-line no-undef
    const titleUrl = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=VITE_API_KEY`;

    // eslint-disable-next-line no-console
    console.log(`this is your titleURl ${titleUrl}`);
    const titleResp = fetch(`${titleUrl}`);
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

    // console.log(Search.Title)
    const mainCon = document.getElementById('main_con');
    // console.log(data.Search[i])

    const imgCont = document.createElement('div');
    const imgTag = document.createElement('img');
    const movieID = document.createElement('p');
    const title = document.createElement('p');
    const year = document.createElement('p');

    imgTag.src = searchRes[i].Poster;
    imgTag.setAttribute('style', 'width: 500px');

    title.textContent = searchRes[i].Title;
    movieID.textContent = searchRes[i].imdbID;
    year.textContent = searchRes[i].Year;
    title.textContent = titleData.title;

    imgCont.appendChild(imgTag);

    mainCon.appendChild(title);
    mainCon.appendChild(movieID);
    mainCon.appendChild(year);
    mainCon.appendChild(imgCont);
  }
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
