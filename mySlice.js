function mySlice(arr, start, end) {
if (start < 0) {
  start = arr.length + start;
 }

 if (end < 0) {
  end = arr.length + end;
 }
 if (end === undefined || end > arr.length) {
  end = arr.length;
 }

 let arrSlice = [];
 for (let i = start; i < end; i++) {
  arrSlice.push(arr[i]);
 }

 return arrSlice;
}
