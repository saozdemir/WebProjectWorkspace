/*
* https://api.themoviedb.org/3/movie/550?api_key=
* Api Key : 0a2c9d9f6fbf68a88b0264d7126c99ea
*
* https://api.themoviedb.org/3/movie/popular?api_key=0a2c9d9f6fbf68a88b0264d7126c99ea
* https://developer.themoviedb.org/reference/discover-movie
*
* */
class MovieApi {
    constructor() {
        this.apiKey = "0a2c9d9f6fbf68a88b0264d7126c99ea";
        this.baseImageUrl = "https://image.tmdb.org/t/p/w1280/";
        this.popularURL = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=tr-TR&sort_by=popularity.desc`;
        this.searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=`;
        this.movies = document.querySelector(".movies");
    }

    async getPopularMovies() {
        const response = await fetch(this.popularURL);
        const movies = await response.json();
        this.displayInfo(movies);
    }

    displayInfo(movies) {
        this.movies.innerHTML = "";
        movies.results.forEach(movie => {
            this.movies.innerHTML += `
            <div class="movie">
                <img class="movie-picture" src="${this.baseImageUrl}${movie.poster_path}" alt=""
                 width="230" height="345">
                <div class="info">
                    <h4 class="movie-name">${movie.title}</h4>
                    <h5 class="imdb-point ${this.changeColor(movie.vote_average.toFixed(1))}">${movie.vote_average.toFixed(1)}</h5>
            </div>
        </div>
        `;
        });
    }

    async getMoviesByName(movieName) {
        const response = await fetch(`${this.searchURL}${movieName}`);
        const movies = await response.json();
        this.displayInfo(movies);
    }

    changeColor(imdbPoint) {
        if (imdbPoint >= 8) {
            return "green";
        } else if (imdbPoint >= 6) {
            return "yellow"
        } else {
            return "red";
        }
    }
}

export { MovieApi };