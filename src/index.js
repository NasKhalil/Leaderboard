import './style.css';
import { newGame, sendScore, getScore } from './api.js';

const scoreTable = document.querySelector('#score-table');
const addScoreBtn = document.querySelector('#btn-add');
const user = document.getElementById('input-name');
const score = document.getElementById('input-score');
const refrechBtn = document.getElementById('refresh');

const displayTable = async () => {
  const data = await getScore();
  let htmlCode = '';
  data.result.sort((a, b) => b.score - a.score);
  data.result.forEach((item, key) => {
    htmlCode += `
      <p>${key += 1} - ${item.user}: ${item.score}</p>
    `;
  });
  scoreTable.innerHTML = htmlCode;
};

const CreateNewGame = async () => {
  await newGame();
  displayTable();
};

CreateNewGame();

addScoreBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  await sendScore(user.value, score.value);
  user.value = '';
  score.value = '';
});

refrechBtn.addEventListener('click', () => {
  displayTable();
});

displayTable();