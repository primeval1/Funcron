/**
 * Created by Dimitris on 7/20/2077.
 */

/*
*/
let Funcron = require('./Funcron');

function showdate() {
    d = new Date();
    console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());
}

let makeSchedule= function(time){
    let arr = [];
    let h = 0;
    let m = 0;
    while (h < 24 ){
        while(m < 60 ){
            arr.push({time:pad(h)+':'+pad(m)+':00',fn:()=>{showdate()}});
            m +=time
        }
        m = 60 - m;
        h++;
    }
    return arr;
};

let times = makeSchedule(1);

function pad(number) {
    if (number<10) { number = ("0"+number) }
    return number;
}

let sch = new Funcron({
    timeSlots:times,
    maxSchTime:10,
    defaultFn:function () {
        console.log('hey default is called')
    }
});
console.log(times);
sch.startTimeSchedule();


