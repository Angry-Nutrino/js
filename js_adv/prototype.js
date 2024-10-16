// const func1=function(){
//     console.log("hola this is a function");
    
// }
// function multipleBy5(num){

//     return num*5
// }

// multipleBy5.power = 2

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);
// console.log(multipleBy5.prototype);

// function createUser(username, score){
//     this.username = username
//     this.score = score
// }

// createUser.prototype.increment = function(){
//     tea.score++
// }
// createUser.prototype.printMe = function(){
//     console.log(`price is ${this.score}`);
// }

// const chai = new createUser("chai", 25)
// const tea = new createUser("tea", 250)
// chai.increment()
// chai.printMe()
// tea.printMe()

// myarr=[21,32,43]
// myobj={
//    username:"alkama",
//    usn:"vy003",
//    gpa:9
// }
// Object.prototype.alkama=function(){
//     console.log("alkama is present in all objects");   
// }
// myobj.alkama()
// myarr.alkama()
Array.prototype.mylen= function(){
    return this.length
}
console.log([22,23,24,25].mylen());

