

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let artem = new Student("Артем", "муж", 29)
let petya = new Student("Петя", "муж", 33)

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = [];
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function ( ...args) {
  if (this.marks === undefined) {
    this.marks = [];
    args.map(el => this.marks.push(el));
  } else {
    args.map(el => this.marks.push(el));
  }
};

Student.prototype.getAverage = function () {
  let sum = this.marks.reduce((sum, current) => sum + current)  
  this.mediumAriphetic = sum / this.marks.length // для окргление в не рамок задания Number((sum / this.marks.length).toFixed(2))
  return this.mediumAriphetic
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};

//                                Проверка node                    

artem.addMark(5);
artem.addMark(4);
artem.addMarks(4,4,3,5,4,3,4);
artem.getAverage();
artem.exclude("балбес");

petya.addMark(2);
petya.addMark(3);
petya.addMarks(2,3,2,2,2,3,2);
petya.getAverage();
petya.exclude("плохая успеваемость");

console.log(artem);
console.log(petya);