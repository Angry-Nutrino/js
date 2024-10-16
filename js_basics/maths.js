const min=40
const max=70
//console.log(Math.floor((Math.random()*(max-min+1))+min))
//console.log(Temporal.Now.instant())
const mydate= new Date
//console.log(mydate.toDateString()) 
//console.log(mydate.getMonth()+1)
//console.log(`the date is ${mydate.getDay()} and the month is ${mydate.getMonth()+1}`) 
console.log(mydate.toLocaleString('default',{
    era:"short"
}))