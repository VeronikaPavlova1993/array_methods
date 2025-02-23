function myIndexOf(arr, item, from) {
 let searchItem;

 if (arr.length === 0) {
  return -1;
 }
 let index = +from || 0;

 if (Math.abs(index) === Infinity) {
  index = 0;
 }

 if (index >= arr.length) {
  return -1;
 }

 searchItem = Math.max(index >= 0 ? index : arr.length - Math.abs(n), 0);

 while (searchItem < arr.length) {
  if (searchItem in arr && arr[searchItem] === item) {
   return searchItem;
  }
  searchItem++;
 }
 return -1;
}
