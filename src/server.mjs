import express from "express";
import checkAnswer from "./model/checkAnswer.mjs";

const app = express();
const port = 3000;

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.json());

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/playing', (req, res) => {
  res.render('sudoku');
})

app.post('/check-answer', checkAnswer);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});