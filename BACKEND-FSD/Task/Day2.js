//Synchronous and Asynchronous
// console.log("task3");

// function hello(){
//     console.log("task1");
// }
// hello();
// console.log("task2");




// function hello(){
//     console.log("task1");
//     setTimeout(function(){
//         console.log("task2");
//         console.log("task4");
//     },2000)
// }
// hello();
// console.log("task3");



//  function hello(n1,n2,cb){
//     console.log("task1");
//   return n1+n2;
//   cb();
//     }
//     let a=10;
//     let b=20;
// console.log(hello(a,b));
// hello(a,b,hi);
// hello(a,b,demo);
// function hi(){
//     console.log("sayhi");
// }
// hi();
// function demo(){
//     console.log("demo");
// }
// demo();






function welcome(callback) {
    callback("Welcome");
}

function display(message) {
    console.log(message);
}

welcome(display);