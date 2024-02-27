// 🌟 Exercise 3: File Management Using CommonJS Syntax
// Instructions
//1. Create a file named fileManager.js.

//2. Inside fileManager.js, define a module that exports functions for reading and writing files.
//- Export functions named readFile and writeFile.
//- Implement the readFile function to read the content of a specified file using the fs module.
//- Implement the writeFile function to write content to a specified file using the fs module.

//3. Create a file “Hello World.txt” containing the sentence “Hello World !! “

//4. Create a file “Bye World.txt” containing the sentence “Bye World !! “

//5. Create another file named app.js.

//6. In app.js, import the functions from the fileManager.js module.

//7. Use the imported functions to read the content of the “Hello World.txt” text file and then write to the “Bye World.txt” with the content “Writing to the file”.

//8. Run app.js and verify that the file reading and writing operations are successful.

const fs = require('fs');

const hello = 'HelloWorld.txt'
const bye = 'ByeWorld.txt'

// fs.writeFile(hello, 'Hello World !!',(err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('File created');
//     }
// })

// fs.writeFile(bye, 'Bye World !!',(err)=>{
//     if(err){
//         console.log(err);
//     } else {
//         console.log('File created');
//     }
// })

function readFile(file){
    fs.readFile(file , 'utf8', (err, data) => {
        if (err) {
          console.error('Error reading file:', err);
          return;
        }
        console.log('File contents:', data);
      });
}

// readFile(hello)

function writeFile(file, content){
    fs.appendFile(file, content,(err, data)=>{
        if(err){
            console.log(err);
        } else {
            console.log('content added: ' + content);
        }
    })
}

module.exports = {
    hello,
    bye,
    readFile,
    writeFile
}