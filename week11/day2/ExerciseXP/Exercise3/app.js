const  {
    hello,
    bye,
    readFile,
    writeFile
} = require("./fileManager.js")

const content = 'Writing to the file'

readFile(hello);

writeFile(bye, content);