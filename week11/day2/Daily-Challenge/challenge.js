import greet from "./greeting.js";

const name = "moshe"

greet(name)

import displayColorfulMessage from "./colorful-message.js";

const message = greet(name)

displayColorfulMessage(message)

import displayData from "./read-file.js"

const file ='./files/file-data.txt'

displayData(file);

//displayColorfulMessage(greet(name))