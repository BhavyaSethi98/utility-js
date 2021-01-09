const min = (arr) => {
 return minElement(arr,arr.length);
}
const minElement =(arr,arrLength) =>{
 if(arrLength==0) return arr[0];
 return Math.min(arr[arrLength-1],minElement(arr,arrLength-1));
}
module.exports = min;
