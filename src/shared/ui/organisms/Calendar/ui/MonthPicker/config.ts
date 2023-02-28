export const INDENT_COUNT = 3;
export const ITEM_SIZE = 30;
export const OPACITY_Range = [0.4, 0.6, 0.8, 1, 0.8, 0.6, 0.4];
export const FONT_SIZE_RANGE = [8, 10, 12, 14, 12, 10, 8];

export const getInputRange = (indexWithIndent: number) => [
  (indexWithIndent - 3) * ITEM_SIZE,
  (indexWithIndent - 2) * ITEM_SIZE,
  (indexWithIndent - 1) * ITEM_SIZE,
  indexWithIndent * ITEM_SIZE,
  (indexWithIndent + 1) * ITEM_SIZE,
  (indexWithIndent + 2) * ITEM_SIZE,
  (indexWithIndent + 3) * ITEM_SIZE,
];
