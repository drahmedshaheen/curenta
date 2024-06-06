export const calculatePercentage = (range: [number, number], value: number) => {
  const [min, max] = range;
  if (value < min) return 0;
  if (value > max) return 100;
  return Math.round(((value - min) / (max - min)) * 100);
};

export const percentageToValue = (
  range: [number, number],
  percentage: number
) => {
  const [min, max] = range;
  if (percentage < 0) return min;
  if (percentage > 100) return max;
  return min + (percentage / 100) * (max - min);
};
