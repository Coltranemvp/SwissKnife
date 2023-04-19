export const useRatingData = (starCount?: number) => {
  const starNumber = 5;
  return [...Array(starCount || starNumber).keys()];
};
