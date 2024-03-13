import express from "express";

const app = express();
const port = 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/playing', (req, res) => {
  res.render('sudoku');
})

app.get('/check-answer', (req, res) => {
  
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});