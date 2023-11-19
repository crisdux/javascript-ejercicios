// Crear una función que dado un objeto que contenga niveles de experiencia y puntaje por cada nivel, y un objeto con la cantidad de desafíos realizados por cada nivel, devuelva la cantidad total de experiencia obtenida

const getXP = (challenges, score) => {
  let challengesValues = Object.values(challenges);
  let scoreValues = Object.values(score);
  let res = 0;
  challengesValues.forEach((item, i) => {
    res += item * scoreValues[i];
  });
  return res;
};

const score = { EASY: 10, MEDIUM: 50, HARD: 100 };
const challenges = { EASY: 3, MEDIUM: 4, HARD: 2 };
console.log(getXP(challenges, score)); // returns 430 (3 * 10 + 4 * 50 + 2 * 100)
