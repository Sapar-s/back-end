const express = require("express");
const { upcomingMovies } = require("./utils/movieDB");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser());
// console.log(upcomingMovies);
// app.get("/movies", function (req, res) {
//   res.send({
//     data: upcomingMovies,
//   });
// });

let movies = [];

const addUser = (moviesData) => {
  movies.push(moviesData);
  console.log(movies);
};

app.post("/movies", (req, res) => {
  console.log("body => ", req.body);
  addUser(req.body);
  res.send({ movies });
});

app.get("/movies", (req, res) => {
  res.send(movies);
});

// app.put("/movies", function(req,res){
//   const {}
// })

app.delete("/movies", function (req, res) {
  const { id } = req.body;
  const newMovies = movies.filter((movie) => movie.id !== id);
  movies = newMovies;
  res.send("Successfully deleted movie");
});

app.listen(5000, () => {
  console.log(`My back end is started at: ${5000}`);
});

// app.post("/", (req, res) => {
//   console.log("body => ", req.body);
//   res.send("Pinecone");
// });

// let palindrome = false;

// const isPalindrome = (x) => {
//   // x = {x:-3}
//   if (x < 0) {
//     palindrome = false;
//   } else {
//     palindrome = true;
//   }
// };

// app.post("/isPalindrome", (req, res) => {
//   console.log("body ", req.body);
//   // {x: -3}
//   isPalindrome(req.body.x);
//   res.send(palindrome);
// });
