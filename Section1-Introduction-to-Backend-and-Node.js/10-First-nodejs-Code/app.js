const fs = require("fs");

const text = fs.readFileSync("hello.txt");
// const text = fs.readFileSync("C:\\Users\\Ayush Thakur\\Desktop\\newProgram.txt");
console.log(text.toString());
// console.log(globalThis);
console.log("End");

//Write into a file
// try {
//     fs.writeFileSync('hello.txt', 'Hello Node.js from the server!');
//     console.log('File write success! hello.txt updated.');
// } catch (err) {
//     console.error("Error writing file:", err);
// }

//Read the file
// try {
//     const textContent = fs.readFileSync("hello.txt");
//     // readFileSync returns a Buffer, so we convert it to a string
//     console.log("File content read:", textContent.toString());
// } catch (err) {
//     console.error("Error reading file:", err);
// }

// rename the file
// fs.renameSync('hello.txt', 'greeting.txt');

// delete the file
// fs.unlinkSync('hello.txt')

// Start any program
// const { exec } = require('child_process');
// exec('start chrome')

