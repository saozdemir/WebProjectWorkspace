class StorageDB {
  static keySelectedSeats = "keySelectedSeats";
  static keyFullSeats = "keyFullSeats";
  static keySelectedMovie = "keySelectedMovie";

  // Listeleme
  static getSelectedSeatsFromStorage() {
    let seletedSeats;
    if (localStorage.getItem(this.keySelectedSeats) === null) {
      seletedSeats = [];
    } else {
      seletedSeats = JSON.parse(localStorage.getItem(this.keySelectedSeats));
    }
    return seletedSeats;
  }

  static getFullSeatsFromStorage() {
    let fullSeats;
    if (localStorage.getItem(this.keyFullSeats) === null) {
      fullSeats = [];
    } else {
      fullSeats = JSON.parse(localStorage.getItem(this.keyFullSeats));
    }
    return fullSeats;
  }

  static getSelectedMovieIndexFromStorage() {
    let index;
    if (localStorage.getItem(this.keySelectedMovie) === null) {
      index = 0;
    } else {
      index = localStorage.getItem(this.keySelectedMovie);
    }
    return index;
  }

  //Ekleme
  static addSelectedSeatsToStorage(indexes) {
    localStorage.setItem(this.keySelectedSeats, JSON.stringify(indexes));
  }

  static addFullSeatsToStorage(indexes) {
    const fullSeatsIndex = this.getFullSeatsFromStorage();
    indexes.forEach((index) => {
      fullSeatsIndex.push(index);
    });
    localStorage.setItem(this.keyFullSeats, JSON.stringify(fullSeatsIndex));
  }

  static addSelectedMovieToStorage(index) {
    localStorage.setItem(this.keySelectedMovie, JSON.stringify(index));
  }
}
export { StorageDB };
