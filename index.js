const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arrNama, fnCallback) => {
  let no = 1;
  const hasilArrSort = [];
  const arrSorter = fnCallback(arrNama);
  for (let counter = 0; counter < arrSorter.length; counter++) {
    hasilArrSort.push(no++ +". "+ arrSorter[counter]);
  }

  return hasilArrSort;
};


// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arrCall=[]) => {
  const arrHasil = [];

   for (let i = 0; i < arrCall.length; i++) {
     arrHasil.push(arrCall[i]);
   }
   return arrHasil.sort();
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arrCall = []) => {
  const arrHasil = [];

  for (let i = 0; i < arrCall.length; i++) {
    arrHasil.push(arrCall[i]);
  }

  return arrHasil.sort().reverse();
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
