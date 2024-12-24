import { MovieApi } from "./api.js";


const movieApi = new MovieApi();
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");

runEventListeners();

function runEventListeners() {
    document.addEventListener("DOMContentLoaded", movieApi.getPopularMovies());
    form.addEventListener("submit", getMoviesByName)
}

function getMoviesByName(e) {
    const movieName = searchInput.value.trim();
    movieApi.getMoviesByName(movieName);
    e.preventDefault();//! input bir form içinde tanımlu. Form'un submit özelliğini kapatarak sayfa yönlendirmesini iptal ettik.
}
