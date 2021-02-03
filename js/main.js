const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min >= max || min < 0 || max < 0) {
    throw new Error('Invalid Variable value');
  }

  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(0, 2)


const getRandomMapCoordination = function (min, max, numberOfDecimal = 2) {
  if (max > min && min >= 0) {
    return +((Math.random() * (max - min) + min).toFixed(numberOfDecimal));
  }

  throw new Error('Invalid Variable value');
}

getRandomMapCoordination(0, 10);
