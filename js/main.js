const getRandomNumberGenerated = function (min, max) {
  // случайное число от min до (max+1)
  const rand = min + Math.random() * (max + 1 - min);

  if (min >= max || min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.log('error');
    return;
  }
  return Math.floor(rand);
}

// eslint-disable-next-line no-console
console.log(getRandomNumberGenerated(0, 1));


const getRandomIntNumber = (min, max, symbolNumber = 1) => {
  const rand = getRandomNumberGenerated(min, max);

  if (min >= max || min < 0 || max < 0) {
    // eslint-disable-next-line no-console
    console.log('error');
    return;
  }

  return rand.toFixed(symbolNumber);
}

getRandomIntNumber(10, 20, 3);
