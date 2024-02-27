const fs = require("fs");

const directoryPath = '../file-explorer'

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Display the names of files in the terminal
    console.log('Files in the directory:', files);
    
    });