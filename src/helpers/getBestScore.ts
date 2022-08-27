export const getBestScore = (): number => {
  const lsBestScore = localStorage.getItem("bestscore");
  if (lsBestScore) return +lsBestScore;
  return 0;
};
