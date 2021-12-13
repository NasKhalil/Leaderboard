import _ from 'lodash';
import './style.css';
import data from './data';

const scoreTable = document.querySelector('#score-table');

const displayTable = () => {
  let htmlCode = '';
  data.forEach((item) => {
    htmlCode += `
      <p>${item.user}: ${item.score}</p>
    `;
  });
  scoreTable.innerHTML = htmlCode;
}

displayTable();