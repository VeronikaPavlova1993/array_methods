function myIncludes(arr, item, from) {
    if (arr.length === 0) {
        return false;
      }
      let index = from | 0;
      let search = Math.max(index >= 0 ? index : arr.length - Math.abs(index), 0);

      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }

      while (search < arr.length) {
        if (sameValueZero(arr[search], item)) {
          return true;
        }
        k++;
      }

      return false;
}

      