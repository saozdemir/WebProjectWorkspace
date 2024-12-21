import { StorageDB } from "./storage.js";
/** Elementleri Seçme */
const container = document.querySelector(".container");
const selectMovie = document.querySelector("#selectMovie");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");
const seats = Array.from(document.querySelectorAll(".seat"));
const buyButton = document.querySelector("#buyButton");
const clearButton = document.querySelector("#clearButton");
runEventListeners();

function runEventListeners() {
  container.addEventListener("click", select);
  selectMovie.addEventListener("change", changeMovie);
  buyButton.addEventListener("click", buyTicket);
  clearButton.addEventListener("click", clear);
  document.addEventListener("DOMContentLoaded", runPageLoaded);
}

function select(e) {
  const selectedElement = e.target.parentElement;
  //? Seçilen elementin parent elementini aldık. Paretn elementin class'ı seat içeriyorsa classList'ine selected class'ını da ekle (style.css içinde tanımlı)
  if (
    selectedElement.classList.contains("seat") &&
    !selectedElement.classList.contains("full")
  ) {
    selectedElement.classList.toggle("selected"); //! toggle() yerine add() kullanılırsa değişmez.
    calculate();
    saveSelectedSeatsIndexToStorage();
    saveSelectedMovieIndexToStorage();
  }
}

function runPageLoaded() {
  const selectedSeatsIndex = StorageDB.getSelectedSeatsFromStorage();
  const fullSeatsIndex = StorageDB.getFullSeatsFromStorage();
  seats.forEach((seat, index) => {
    if (selectedSeatsIndex.includes(index)) {
      seat.classList.add("selected");
    }
    if (fullSeatsIndex.includes(index)) {
      seat.classList.add("full");
    }
  });
  selectMovie.selectedIndex = StorageDB.getSelectedMovieIndexFromStorage();
  calculate();
}

function changeMovie() {
  calculate();
  saveSelectedMovieIndexToStorage();
}

function getSelectedSeats() {
  //const selectedList = Array.from(container.querySelectorAll(".selected"));
  const selectedList = [...container.querySelectorAll(".selected")];
  return selectedList;
}

function getSelectedSeatsIndex() {
  const selectedList = getSelectedSeats();
  const selectedSeatsIndex = selectedList.map((seat) => {
    return seats.indexOf(seat); //! Tüm koltuklar içinden seçili olanı selectedSeatsIndex dizisine ekliyor.
  });
  return selectedSeatsIndex;
}

function saveSelectedSeatsIndexToStorage() {
  const seletedSeatsIndex = getSelectedSeatsIndex();
  StorageDB.addSelectedSeatsToStorage(seletedSeatsIndex);
}

function saveSelectedMovieIndexToStorage() {
  const selectedMovieIndex = selectMovie.selectedIndex;
  StorageDB.addSelectedMovieToStorage(selectedMovieIndex);
}

function calculate() {
  const getSelectedListCount = getSelectedSeats().length;
  //const price = selectMovie.options[selectMovie.selectedIndex].value;
  const price = selectMovie.value;

  count.textContent = getSelectedListCount;
  amount.textContent = price * getSelectedListCount;
}

function buyTicket() {
  if (confirm("Satın almak istiyor musunuz?")) {
    const selectedSeats = getSelectedSeats(); //seçili koltukları al.
    const selectedSeatsIndex = getSelectedSeatsIndex();

    selectedSeats.forEach((seat) => {
      seat.classList.remove("selected");
      seat.classList.add("full");
    }); //Seçili koltukarın selected class'ını kaldır.
    StorageDB.addFullSeatsToStorage(selectedSeatsIndex); //Seçili koltukları dolu koltuk alanına ekle
    StorageDB.addSelectedSeatsToStorage(getSelectedSeatsIndex()); //Tekrardan seçili koltukları alınca remove("selected") ile seçim kaldırılmış oldu ve storage da selectedSeats alanı tekrar güncellendi
    calculate();
  }
}

function clear() {
  const selectedSeats = getSelectedSeats();
  if (selectedSeats != null && selectedSeats.length > 0) {
    selectedSeats.forEach((seat) => {
      seat.classList.remove("selected");
    });
  }
  StorageDB.addSelectedSeatsToStorage(getSelectedSeatsIndex());
  selectMovie.options.selectedIndex = 0;
  StorageDB.addSelectedMovieToStorage(selectMovie.options.selectedIndex);
  calculate();
}
