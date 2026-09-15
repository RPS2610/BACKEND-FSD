// import fs from "fs/promises";

// const fileName = "student.txt";

// // 1. CREATE
// async function createFile() {
//     try {
//         await fs.writeFile(
//             fileName,
//             "Name: Satwik\nCourse: B.Tech CSE",
//             "utf8"
//         );

//         console.log("File created successfully");
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }


// // // 2. READ
// // async function readFile() {
// //     try {
// //         const data = await fs.readFile(fileName, "utf8");

// //         console.log("\nFile Content:");
// //         console.log(data);
// //     } catch (error) {
// //         console.log("Error:", error.message);
// //     }
// // }


// // // 3. UPDATE
// // async function updateFile() {
// //     try {
// //         await fs.appendFile(
// //             fileName,
// //             "\nCollege: ABES Engineering College............",
// //             "utf8"
// //         );

// //         console.log("\nFile updated successfully");
// //     } catch (error) {
// //         console.log("Error:", error.message);
// //     }
// // }


// // // 4. DELETE
// // async function deleteFile() {
// //     try {
// //         await fs.unlink(fileName);

// //         console.log("\nFile deleted successfully");
// //     } catch (error) {
// //         console.log("Error:", error.message);
// //     }
// // }

// // Execute CRUD operations
// async function main() {

//     await createFile();

//     // await readFile();

//     // await updateFile();

//     // await deleteFile();
// }

// main();



// const EventEmitter= require('events');
// class MyEvent extends EventEmitter{}
// const events = new EventEmitter();
// events.on("greet", (name)=>{
//     console.log(`Hello, ${name}! This is event emitter`);  //template literal ${variable}

// })
// events.on("exit", ()=>{
//     console.log("This is exit event");
// });
// events.emit("greet","Saanvi");
// events.emit("exit");

// import fs from "fs/promises";

// const fileName = "student.txt";

// // 1. CREATE
// async function createFile() {
//     try {
//         await fs.writeFile(
//             fileName,
//             "Name: Ranjana\nEmail: speaktoranjana1@gmail.com",
//             "utf8"
//         );

//         console.log("File created successfully");
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }


// // // 2. READ
// async function readFile() {
//     try {
//         const data = await fs.readFile(fileName, "utf8");

//         console.log("\nFile Content:");
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }


// // // 3. UPDATE
// async function updateFile() {
//     try {
//         await fs.appendFile(
//             fileName,
//             "\nCollege: ABES Engineering College............",
//             "utf8"
//         );

//         console.log("\nFile updated successfully");
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }


// // // 4. DELETE
// async function deleteFile() {
//     try {
//         await fs.unlink(fileName);

//         console.log("\nFile deleted successfully");
//     } catch (error) {
//         console.log("Error:", error.message);
//     }
// }

// // Execute CRUD operations
// async function main() {

//     await createFile();

//     await readFile();

//     await updateFile();

//     // await deleteFile();
// }

// main();


