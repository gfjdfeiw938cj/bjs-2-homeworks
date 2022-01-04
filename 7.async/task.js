//                                              Задание 1
class AlarmClock {
    constructor() { 
    this.alarmCollection = [];
    this.timerId = null;
    }
    
    addClock(time, Callback, id){
        if(!id) throw new Error( 'error: невозможно индетифицировать будильник. Параметр id не передан' )
        
        if (this.alarmCollection.some(el => el.id === id)) {
			console.error(`Звонок с данным id ${id} уже зарегестрирован!`);
			return;
		};

        this.alarmCollection.push({id,time,Callback})      
    }
    removeClock(id){
        if(this.alarmCollection.some(el => el.id == id)){ 
        this.alarmCollection.splice(this.alarmCollection.findIndex( el => el.id == id),1)
        return true
        }else return false
    } 
    
    getCurrentFormattedTime(){
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let output = 'h:m'.replace('h', hours).replace('m', mins)
        return output;
    }

    start(){
//             №1 способ. Принцип основан на вычитания дат и последующем преобразования его в микро секунды для setTimeout()		
        let checkingСurrentTimer = checkClock.bind(this) //Передаем в нашу функцию checkClock весь контекст конструкора. 
        
        function checkClock(objAlarmСlock){
		    let date = new Date()
			let arr = objAlarmСlock.time.split(':')
            if (arr[0] < 10) arr[0] = +arr[0].substring(1,2);
            if (arr[1] < 10) arr[1] = +arr[1].substring(1,2); 
            let current = Math.abs(new Date(date.getFullYear(), date.getMonth(), date.getDate(), +arr[0], +arr[1],0).getTime() - new Date().getTime())     
		    return current
		}
		
		if(!this.timerId) this.timerId = setInterval(() => {this.alarmCollection.forEach(el => setTimeout(() => el.Callback(), checkingСurrentTimer(el)))}, 1000)
//            №2 способ. Принцип основан на сравнении реального времени(преобразованного в формат hh:mm) с заданным в аргументе.		
//            и в каждый момент времени происходит сравнение пока условие не будет true и в результате этого выдаёт сообщение будильника   
 
//          let checkAlarm = checkClock.bind(this);
//          function checkClock(objAlarmСlock) {
//         	if (objAlarmСlock.time === this.getCurrentFormattedTime()) objAlarmСlock.func();
//          }
//          if (!this.timerId) this.timerId = setInterval(() => this.alarmCollection.forEach(el => checkAlarm(el)),1000);	       
    }                   

    stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		};
	};

    printAlarms() {
		this.alarmCollection.forEach(el => console.log(`Будильник №${el.id} заведен на ${el.time}`));
	};

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	};

}
// let phoneAlarm = new AlarmClock();
// phoneAlarm.addClock("21:03",() => {console.log("Пора вставать")},1)
// phoneAlarm.addClock("21:04",() => {console.log("Пора вставать и петь")},2)
// phoneAlarm.addClock("21:05",() => {console.log("Пора бежать")},3)
// phoneAlarm.removeClock()
// phoneAlarm.stop()
// phoneAlarm.start()
// phoneAlarm.printAlarms()




