//                                             Задание 1
function getArrayParams(arr) {
  let min, max, avg;
  max = Math.max.apply(null, arr);
  min = Math.min.apply(null, arr);
  avg = arr.reduce((sum, el) => sum + el,0) / arr.length;
  return { min: min, max: max, avg: Number(avg.toFixed(2))};
}

//                                             Задание 2
function worker(arr) {
  let sum;
  sum  = arr.reduce((sum, el) => sum + el,0)
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  let mapArr = arrOfArr.map(el => func(el))
  max = Math.max.apply(null,mapArr);
  return max;
}

console.log(makeWork([[1,2,3],[4,5,6]], worker)) 
console.log(makeWork([[1,2,3],[4,5,6]], worker2)) 

//                                               Задание 3
function worker2(arr) {
  let difference
  difference =  Math.abs(Math.max.apply(null, arr) - Math.min.apply(null, arr))
  return difference
}



                             

