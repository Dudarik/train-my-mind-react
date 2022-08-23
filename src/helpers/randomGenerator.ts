export const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const getRandomColor = (): number => getRandomNumber(0, 3);

export const getRandomCardType = (): number => getRandomNumber(0, 3);

export const getCountItem = (): number => getRandomNumber(1, 4);

export const getRandomCloseCardId = (closeCardsArr: number[]): number =>
  closeCardsArr[getRandomNumber(0, closeCardsArr.length - 1)];
