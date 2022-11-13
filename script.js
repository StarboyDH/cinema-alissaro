const moviePoster = document.querySelector(".movie-poster");
const movieTitle = document.querySelector(".movie-title");
const movieYear = document.querySelector(".year-of-movie");
const movieGenres = document.querySelector(".genres");
const movieDuration = document.querySelector(".duration");
const movieDirector = document.querySelector(".director");
const movieQuote = document.querySelector(".quote");
const btn = document.querySelector(".btn");

function getRandomMovie() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((movies) => {
      const dataLength = movies.length;
      const randomMovie = Math.floor(Math.random() * dataLength);
      movies.forEach((e) => {
        if (e.id === randomMovie) {
          moviePoster.src = e.poster;
          movieTitle.innerText = e.title;
          movieYear.innerText = `| ${e.year}`;
          movieGenres.innerText = `| ${e.genres}`;
          movieDuration.innerText = `| ${e.duration}`;
          movieDirector.innerText = `| ${e.director}`;
          movieQuote.innerText =
            e.quote[Math.floor(Math.random() * e.quote.length)];
        }
      });
    });
}

getRandomMovie();

btn.addEventListener("click", () => {
  getRandomMovie();
});
