const ism = ["Ali", "Vali", "Sami", "Diyor", "Shoxrux"];

ism.forEach(function (ism) {
  const newIsm = ism.toUpperCase() + ism.slice(1).toLowerCase() + "bek";
  console.log(ism);
});

const movies = [
  { name: "Avengers", year: 2012, director: "Joss Whedon" },
  { name: "Inception", year: 2010, director: "Christopher Nolan" },
  { name: "The Dark Knight", year: 2008, director: "Christopher Nolan" },
];

movies.forEach((movie) => {
  const result = `kino nomi: ${movie.name}, chiqarilgan yili: ${movie.year}, Rejissyor: ${movie.director}`;
  console.log(result);
});
