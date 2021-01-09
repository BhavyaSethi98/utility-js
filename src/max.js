const max = (arr) => {
 return maxElement(arr,arr.length);
}
const maxElement =(arr,arrLength) =>{
 if(arrLength==0) return arr[0];
 return Math.max(arr[arrLength-1],maxElement(arr,arrLength-1));
}
module.exports = max;
