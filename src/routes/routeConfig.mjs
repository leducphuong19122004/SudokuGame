import express from 'express'
import checkAnswer from '../controller/checkAnswer.mjs';
const router  = express.Router();

router.get('/', (req, res) => {
    res.render('home');
})

router.get('/playing', (req, res) => {
    res.render('sudoku');
})

router.post('/check-answer', checkAnswer);

export default router;