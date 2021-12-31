//                                  Задание №1
class PrintEditionItem {
  constructor(...arg) { 
 [this.name, this.releaseDate, this.pagesCount]= arg
  this.state = 100;
  this.type = null;
  }
 
  get state(){
      return this._state
  }

  set state(value) {
      if (value < 0) {
        return this._state = 0
      }else if(value > 100){ 
        return this._state = 100
      }else {
        return this._state = value
      }   
  }  
  fix() { 
    this.state  = this.state * 1.5
    return picknick.state = this._state 
   }  
}   

let picknick = new PrintEditionItem(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1972 
);

  picknick.state = 10;
  console.log(picknick.state); //10
  picknick.fix();
  console.log(picknick.state); //15
  console.log(picknick.type)

class Magazine extends PrintEditionItem {
  constructor(...arg) {
  super(...arg);
  this.type = "magazine"
}
}

let magazine = new Magazine(
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1972
)

//   magazine.state = 10;
//   console.log(magazine.state); //10
//   magazine.fix();
//   console.log(magazine.state); //15
//   console.log(magazine.type)

class Book extends PrintEditionItem {
  constructor(author,...arg) {
  super(...arg);
  this.author = author;
  this.type = "book";
}
}

let book = new Book(
  "Артур Конан Дойл",
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1972
)

//   book.state = 31;
//   console.log(book.state); //10
//   book.fix();
//   console.log(book.state); //15
//   console.log(book.name);
//   console.log(book.author);
//   console.log(book.type);

class NovelBook extends Book {
  constructor(...arg) {
  super(...arg);
  this.type = "novel"
}
}

let novelBook = new NovelBook(
  "Герберт Уэллс",
  "Машина времени",
  1895,
  138
)

class FantasticBook extends Book {
  constructor(...arg) {
  super(...arg);
  this.type = "fantastic"
  }
}

let fantasticBook = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
)

fantasticBook.state = 30;
console.log(fantasticBook.state); //10
fantasticBook.fix();
console.log(fantasticBook.state); //15
console.log(fantasticBook.name);
console.log(fantasticBook.author);
console.log(fantasticBook.type);
console.log(fantasticBook);

class DetectiveBook extends Book {
  constructor(...arg) {
  super(...arg);
  this.type = "detective"
}
}

let detectiveBook = new DetectiveBook(
  "Артур Конан Дойл",
  "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
  2019,
  1008
)

//                                   Задание №2

class Library {
  constructor(name) { 
    this.name = name
    this.books = []
  } 
  addBook(object) { 
    if(object.state > 30)
    this.books.push(object)       
  }
  findBookBy(type, value) {
    let book = this.books.find(el => el[type] == value)  
    if(book == undefined) return null                  
    else return book      
  }
  giveBookByName(bookName) {
    let book = this.books.splice(this.books.findIndex(el => el.name == bookName),1) 
    if(book[0] == undefined) return null               
    else return book[0]
  }
}
    
let library = new Library("Библиотека имени Ленина")

library.addBook(fantasticBook)  
library.addBook(novelBook)
library.findBookBy("name","Пикник на обочине")
library.giveBookByName("Машина времен")
console.log(library)

//                                      Задание №3


class Student {
  constructor(...args) {
    [this.name, this.gender, this.age] = args 
    this.objectOfMarks = {};
    this.averageGradeSubject = {};
    this.mediumAripheticAllSubjectsGrades
  }

  addMark(estimation, nameSubject) {
   
    if (estimation > 0 && estimation < 6) {
      if (!this.objectOfMarks[nameSubject]) {  // Неоходимое условие для отфильтрововования повторяющиеся значения в веденные в аргументы метода addMark   
      this.objectOfMarks[nameSubject] = []; // Создаем обьект с массивом оценок, Сюда попадает если ненайденно дубликатов ключей в объекте   
      }
        this.objectOfMarks[nameSubject].push(estimation); // Запись в массив оценок для каждого предмета
    }else console.log("Ошибка, оценка должна быть числом от 1 до 5")  
  }

  addMarks(nameSubject, ...estimation) {
    if(estimation.every( el => el >= 1 && el < 6)){ 
      if (!this.objectOfMarks[nameSubject]) {  // Неоходимое условие для отфильтрововования повторяющиеся значения в веденные в аргументы метода addMark   
        this.objectOfMarks[nameSubject] = []; // Создаем обьект с массивом оценок, Сюда попадает если ненайденно дубликатов ключей в объекте   
        estimation.map(el => this.objectOfMarks[nameSubject].push(el));  
        }
        estimation.map(el => this.objectOfMarks[nameSubject].push(el)); // Запись в массив оценок для каждого предмета
    }else console.log("Ошибка, оценка должна быть числом от 1 до 5")  
  }
  
  getAverageBySubject(nameSubject) {

    if(Object.keys(this.objectOfMarks).includes(nameSubject)){
    let sum = Object.values(this.objectOfMarks[nameSubject]).reduce((sum, current) => sum + current);
    let mediumAriphetic = Number((sum / Object.values(this.objectOfMarks[nameSubject]).length).toFixed(2));
    this.averageGradeSubject[nameSubject] = mediumAriphetic;
    return mediumAriphetic;
    }else console.log("Несуществующий предмет");
  }
 
  getAverage() {
 
    let sum = Object.values(this.objectOfMarks).map(el => el.reduce((acc,el) => acc + el)).reduce((acc,el) => acc + el);
    let mediumAripheticAll = Number((sum / Object.values(this.objectOfMarks).reduce((acc,el) => acc.length + el.length)).toFixed(2));
    this.mediumAripheticAllSubjectsGrades = mediumAripheticAll;
    return mediumAripheticAll;
  }
  
  exclude(reason){
    delete this.objectOfMarks;
    delete this.this.averageGradeSubject;
    delete this.mediumAripheticAllSubjectsGrades;
    this.excluded = reason;          
  };
   

}
let student = new Student("Тема","муж",29)

student.addMark(4,"алгебра")
student.addMarks("алгебра", 4,4,3,4,2,5,4)
student.addMark(4,"алгебра")
student.addMark(5,"алгебра")
student.addMark(3,"геометрия")
student.addMark(4,"геометрия")
student.addMark(5,"геометрия")
student.getAverageBySubject("геометрия")
student.getAverageBySubject("алгебра")
student.getAverage()
console.log(student)