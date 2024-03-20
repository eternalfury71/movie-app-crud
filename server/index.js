const express = require("express");
const movies = require("./db/movies");
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.listen(PORT, () => {
  console.log(`server starting on ${PORT}`);
});

app.get("/api/movies", (req, res) => {
  res.json(movies);
});

app.post("/api/movies", (req, res) => {
  const newMovie = req.body;
  newMovie.id = movies.length + 1;
  movies.push(newMovie);
  res.json(movies);
});
