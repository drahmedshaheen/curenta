export const calculatePercentage = (range: [number, number], value: number) => {
  const [min, max] = range;
  if (value < min) return 0;
  if (value > max) return 100;
  return Math.round(((value - min) / (max - min)) * 100);
};

export const percentageToValue = (
  [start, end]: [number, number],
  percentage: number
) => {
  if (percentage < 0) return end;
  if (percentage > 100) return start;
  return end + (percentage / 100) * (start - end);
};

export const generateAnimationValues = (obj: object, index: number) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, value[index]])
  );
