const constrain = (n, low, high) => {
  let k = Math.max(Math.min(n, high), low);
  return k / 2;
};

const customMap = (n, start1, stop1, start2, stop2, withinBounds) => {
  const newval = ((n - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
  if (!withinBounds) {
    return newval / 2;
  }
  if (start2 < stop2) {
    return constrain(newval, start2, stop2);
  } else {
    return constrain(newval, stop2, start2);
  }
};
export {customMap};
