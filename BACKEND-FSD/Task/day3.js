//promises for asynch
//js single threaded

//promises for asynch
//js single threaded
// const promiseOne=new Promise((resolve,reject)=>{
//     console.log("Promise task  1");
//     // resolve("Promises passed by using resolve");
//     let msg=true;
//     if(!msg==true){
//         console.log("message using promises failed");
//     } else{
//         console.log("error.......")
//     }

//     setTimeout(()=>{
//         console.log(resolve());
//     },2000)
// });
// promiseOne.then(()=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })
// const promiseOne = new Promise((resolve, reject) => {

//     console.log("Promise task 1");

//     let msg = true;

//     setTimeout(() => {

//         if (msg) {
//             resolve("Promise completed successfully");
//         } else {
//             reject("Promise failed");
//         }

//     }, 2000);

// });

// promiseOne
// .then((result) => {
//     console.log(result);
// })
// .catch((error) => {
//     console.log(error);
// });


// new Promise((resolve,reject)=>{
//     console.log("Promise task  1");
//     // resolve("Promises passed by using resolve");
//     let msg=true;
//     if(!msg==true){
//         console.log("message using promises failed");
//     } else{
//         console.log("error.......")
//     }

//     // setTimeout(()=>{
//     //     console.log(resolve());
//     // },2000)
// });
// promiseOne.then(()=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })


//async //await
// console.log("1");
// async function test(){
//     console.log("2"); 
//    await console.log("3"); //aage wle ko left krkek pehle fxn ke bahar run hoga fir ye neeche wle execute honge
//     console.log("4");

// }
// test();
// console.log("5");







//create promises that will print username and password using and if username and password not found then it will call 
// reject and print ERROR. ...
// new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         let err= true;
//         if(!err){
//             resolve("user: ABC, password:1234");
//         }
//         else{
//             reject("Error: Data failed");
//         }
//     },2000);
    
// }).then().catch();

// new Promise((resolve, reject) => {
//     setTimeout(function () {
//         console.log("this is promises ");
//         let err = true;

//         if (!err) {
//             resolve("user: ABC, password:1234");
//         } else {
//             reject("Error: Data failed");
//         }
//     }, 2000);

// })
// .then((data) => {
//     console.log("Success:", data);
// })
// .catch((error) => {
//     console.log(error);
// });

// async function test(){
//     console.log("message: 1");
//    const response= fetch("./student.json"); 
//    console.log(response.status);
//    const stdn=(await response).json();
//    return stdn;
//    console.log("message : 3");


// }
// test();
// console.log("message 2");

//create json for 10 students



// async function test(){
//     console.log("message: 1");
//    const response= await fetch("./student.json"); 
//    console.log(response.status);
//    const stdn = await response.json();
//    console.log("message : 3");
//     return stdn;


// }
// test();
// console.log("message 2");

//create json for 10 students 

// test().then((res)=>{
//     console.log(res);
// })