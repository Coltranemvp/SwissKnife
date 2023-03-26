export const useRatingData = (starCount?: number) => {
  return [...Array(starCount || 5).keys()];
};
