

//                                               Задание 1
function parseCount(value,calculusSystem) {
    let parsed = Number.parseInt(value,calculusSystem);
    if (isNaN(parsed)) throw new Error('Невалидное значение');
    else return parsed;
};
    
function validateCount(value) {   
    try { 
    return parseCount(value);
    }catch (err) {
    return err;
    };
};
//                                                Задание 2   
    class Triangle {
        constructor (a,b,c){
            this.a = a;
            this.b = b;
            this.c = c;
        
            if ((b+c)<a || (a+c)<b || (a+b)<c) {
                throw new Error('Треугольник с такими сторонами не существует');
            } 
        };
        
            getPerimeter(){
                return this.a + this.b + this.c;
            };
        
            getArea(){
                let S = this.getPerimeter() / 2;
                return Number(Math.sqrt((S * (S - this.a) * (S - this.b) * (S - this.c))).toFixed(3));
            };
    }
    
    // let тriangle = new Triangle(40,20,30)
    // console.log(getPerimeter())
    // console.log(getArea()) 
        
    function getTriangle(a,b,c){
        try {
        return new Triangle(a,b,c);
        } catch (e) {
          return new class SimpleClass {
          getArea = () => 'Ошибка! Треугольник не существует';
          getPerimeter = () => 'Ошибка! Треугольник не существует';
          };
        };
    }
    // console.log(getTriangle(40,20,30))
    
