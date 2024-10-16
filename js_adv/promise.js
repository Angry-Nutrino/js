// const promiseone= new Promise(function(resolve,reject){
//     console.log("the task is complete");
//     resolve()
// })
// promiseone.then(()=>{
//     console.log("hello");
    
// })
// const promisetwo= new Promise(function(resolve,reject){
//     console.log("the task is complete");
//     let error=true;
//     if(!error){
//         resolve()
//     }
//     else{
//         reject("we are in the catch block now")
//     }
// })
// promisetwo.then(()=>{
//     console.log("hello");
    
// }).catch((user)=>{
//     console.log(user);
    
// })
// new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("the promise is completed")
//         resolve({'user':'alkama'})
//     },8000)
// }).then(function(e){
//     console.log(e.user);
// })
const promisethree=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
        console.log("the promise is completed")
        resolve({"user":"alkama"})
        }
        else{
            reject("error in js")
        }
    },3000)
})
async function conspromfive(){
    try {
        const resopnse=await promisethree
        console.log(resopnse);
    } catch (error) {
        console.log(error);
        
    }
}
conspromfive()
// const promisefour=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let error=false;
//         if(!error){
//         console.log("the promise is completed")
//         resolve({user:"alkama",usn:"1rn22cy003",pass:"alk123"})
//         }
//         else{
//             reject("error in js")
//         }
//     },3000)
// })


// promisefour.then(function(user){
//     console.log(user)
//     return user.user
// }).then((user)=>{
//     console.log(user)
// })
// .catch((error)=>{
//     console.log(error);
    
// })
 