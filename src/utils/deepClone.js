const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj;

  const newArray = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    newArray[key] = deepClone(obj[key]);
  }

  return newArray;
};

export default deepClone;
