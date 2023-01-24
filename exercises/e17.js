export function minBy(array, cb) {
    if (array.length === 0){
        return undefined;
    }
    return array.reduce((min, current) => cb(current) < cb(min) ? current : min);
  }

export function maxBy(array, cb) {
    if (array.length === 0) {
      return undefined;
    }
    return array.reduce((max, current) => cb(current) > cb(max) ? current : max);
  }