
//                                      Задание 1 
function compareArrays(arr1, arr2) {
  let result;
  every = (el,ind,arr) => el == arr2[ind] && arr.length == arr2.length;       
  result = arr1.every(every)
  return result; // boolean
}

compareArrays([1,2,3],[1,2,3])

//                                      Задание 2
function advancedFilter(arr) {
  let resultArr = arr.filter(el => el >= 0).filter(el => el % 3 == 0 ).map( el => el * 10)
  return resultArr; // array
}

advancedFilter([-1,6,-9,3]) 

//                                    Задание 2 (можно было сделать и так)
function advancedFilter(arr) {
  let resultArr = arr.filter(el => el >= 0 && el % 3 == 0).map( el => el * 10)
  return resultArr; // array
}

advancedFilter([-1,6,-9,3]) 
//                 

//                  Задача вне Netology (выбор пары противоположных вложенных массивов)
// let a = [[1, 2], [2, 4], [12, 65], [2,1], [34, 18], [65, 12]],
// temp = a.filter(e => ~JSON.stringify((JSON.parse(JSON.stringify(a))).map(e=>e.reverse())).indexOf(JSON.stringify(e)));
// console.log(a);
// console.log(temp);