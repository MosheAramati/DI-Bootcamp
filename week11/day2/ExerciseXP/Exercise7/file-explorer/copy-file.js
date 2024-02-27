// Exercise 7: Reading And Copying Files
// Instructions
//1. Create a directory named file-explorer.

//2. Inside the file-explorer directory, create a file named copy-file.js.

//3. In copy-file.js, use the fs module to read the content from a file named source.txt and then write the same content to a new file named destination.txt.

//4. Create another file named read-directory.js.

//5. In read-directory.js, use the fs module to read the list of files in a specified directory and display their names in the terminal.

//6. Open a terminal in the file-explorer directory.

//7. Run node copy-file.js to copy the content from source.txt to destination.txt.

//8. Run node read-directory.js to list the files in the directory.

const fs = require ("fs")

fs.readFile('source.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading source.txt:', err);
        return;
    }

    fs.writeFile('destination.txt', data, (err) => {
        if (err) {
            console.error('Error writing to destination.txt:', err);
            return;
        }
        console.log('Content copied from source.txt to destination.txt successfully.');
    });
});