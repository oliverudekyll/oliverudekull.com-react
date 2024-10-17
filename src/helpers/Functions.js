export const toKebabCase = (value) => {
  return value.split(" ").join("-").toLowerCase();
};
