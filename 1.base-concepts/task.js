
function solveEquation(a, b, c) {
  let arr = [];

  let x;
  let x2;
  let Discriminant = b**2 - 4*a*c;
  
  if(Discriminant > 0){
    x = (-b + Math.sqrt(Discriminant))/(2*a);
    x2 = (-b - Math.sqrt(Discriminant))/(2*a);
    arr.push(x,x2);
    return arr;
  } else if(Discriminant === 0){
    x = -b/2*a;
    arr.push(x);
    return arr;
   } else if(Discriminant < 0)
    return arr; 
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  
  if( Number.isNaN(percent) === true || typeof percent === 'string') {
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`
  }else if(Number.isNaN(contribution) == true || typeof contribution === 'string'){
    return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`
  }else if (Number.isNaN(amount) == true || typeof amount === 'string'){
    return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`
  }else{
    
  let currentMonth = new Date().getMonth(); 
  let currentYear = new Date().getFullYear(); 
  let differenceYear = date.getFullYear() - currentYear;
  let numberMonths = differenceYear * 12 - currentMonth + date.getMonth();

  let totalAmount;
  let S = +amount - +contribution;
  let P = +percent*1/12/100;
  let monthlyPayment;

  monthlyPayment = S * (P + (P / (((1 + P)**numberMonths) - 1)));

  totalAmount = monthlyPayment * numberMonths;

  return Math.round(totalAmount * 100)/100;
  }
}

   