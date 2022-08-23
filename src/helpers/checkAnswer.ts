import { CCardPredict } from "../interfaces/CCardPredict";

export const checkAnswer = (
  targetCort: typeof CCardPredict,
  predictCort: typeof CCardPredict
): number => {
  console.log(targetCort, predictCort);
  let countSign = 0;
  for (let i = 0; i < predictCort.length; i++) {
    if (predictCort[i] !== undefined) {
      if (!targetCort.includes(predictCort[i])) return 0;
      countSign++;
    }
  }

  switch (countSign) {
    case 1:
      return 1;
    case 2:
      return 3;
    case 3:
      return 6;

    default:
      return 0;
  }
};
