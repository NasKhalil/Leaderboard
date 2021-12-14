const newGame = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Codm',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const sendScore = (user, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eQUcQ5gi4JK5SLh8JJKd/scores/', {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
});
};

const getScore = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/eQUcQ5gi4JK5SLh8JJKd/scores/')
  .then((res) => res.json());
  return data;
};

module.exports = { newGame, sendScore, getScore };