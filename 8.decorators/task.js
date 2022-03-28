//                            task 1

function cachingDecoratorNew(func) {
  let cache = [];
  
  function wrapper(...args) {
      const hash = args.join(',') // получаем правильный хэш
      let idx = cache.findIndex((cacheRecord)=> cacheRecord.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
      if (idx !== -1 ) { // если элемент не найден
          console.log("Из кэша: " + cache[idx].result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + cache[idx].result;
      }
  
      let result = func.call(this,...args); // в кэше результата нет - придётся считать
      cache.push({hash, result}) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) { 
        cache.push({hash, result}); // если слишком много элементов в кэше надо удалить самый старый (первый) 
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;  
  }
  return wrapper;

}

//                            task 2

function debounceDecoratorNew(func, ms) {

  let timeout = null;;
  let repeatCall = false;
  
  function wrapper(...rest) {

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      repeatCall = false;
      return func.call(...rest);
    }, delay);
    if (!repeatCall) {
      repeatCall = true;
      func.call(...rest);
    }
  }

  return wrapper;
}
  

//                             task 3     
function debounceDecorator2(func) {

  let counter = 0;

  function wrapper(...rest) {
    wrapper.count = ++counter;
    return func.call(this, ...rest);
  }

  return wrapper;
}
