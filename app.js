const express = require('express');
const app = express();

const PORT = 3000;

const movies = [
  { id: 1, title: 'The Shawshank Redemption', director: 'Frank Darabont' },
  { id: 2, title: 'The Godfather', director: 'Francis Ford Coppola' },
  { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan' },
];

app.get('/movies', (req, res) => {
  res.json(movies);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});