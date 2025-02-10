const express = require("express");
const { upcomingMovies } = require("./utils/movieDB");
const app = express();
const cors = require("cors");
app.use(cors());
// console.log(upcomingMovies);
app.get("/movies", function (req, res) {
  res.send({
    data: upcomingMovies,
  });
});

app.listen(5000, () => {
  console.log(`My back end is started at: ${5000}`);
});
