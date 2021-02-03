/* const getRandomNumberGenerated = function (min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);

  if (min >= max || min < 0 || max < 0) {

    throw new Error('Invalid Variable value');
  }
  return Math.floor(rand);
}

// eslint-disable-next-line no-console
console.log(getRandomNumberGenerated(0, 1)); */


/* const getRandomIntNumber = (min, max, symbolNumber = 1) => {
  const rand = getRandomNumberGenerated(min, max);

  if (min >= max || min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.log('error');
    return;
  }

  return rand.toFixed(symbolNumber);
}

getRandomIntNumber(10, 20, 3); */

const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max || min < 0 || max < 0) {
    throw new Error('Invalid Variable value');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(0, 2)


const getRandomMapCoordination = function (min, max, coordinate = 1) {
  if (max > min && min >= 0) {
    return ((Math.random() * (max - min) + min).toFixed(coordinate));
  }

  throw new Error('Invalid Variable value');
}

getRandomMapCoordination(0, 10);

