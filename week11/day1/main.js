// NodeJS Module System - Share js files

//1. create a module and to share
//2. NPM - Node Package Manager
//3. Core Modules - NodeJS installation

const hello = (name)=> {
    console.log(name);
}

hello("moshe")

const sayHelloToJS = (name)=>{
    console.log(`hey there you${name}`);
}

module.exports = {
    hello,
    sayHelloToJS
}
