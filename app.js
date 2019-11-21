document.getElementById('run').addEventListener('click', async function() {
  
  const test = document.getElementById('input').value;
  
  fetch(`https://superhero-search.p.rapidapi.com/?hero=${test}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "superhero-search.p.rapidapi.com",
      "x-rapidapi-key": "a3c4fa1507mshf6bf0e684668c9bp13089cjsne1a25d5a53fd"
    }
     
  })
  .then(res => res.json())
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  })
})


fetch(
  "https://api.themoviedb.org/3/search/movie?api_key=4d6f4b60a499907f2f7cb19137144751&language=en-US&query=spiderman&page=1&include_adult=false"
)
  .then(test => test.json())
  .then(result => {
    console.log(result.results);
    const test = document
      .getElementById("movieImg")
      .setAttribute(
        "src",
        `https://image.tmdb.org/t/p/oriinal/${result.results[0].poster_path}`
      );
  })
  .catch(err => {
    console.error(err);
  });
