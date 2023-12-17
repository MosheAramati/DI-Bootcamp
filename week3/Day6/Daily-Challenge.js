// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *

stars = [" * " ," *  * " , " *  *  * " , " *  *  *  * " , " *  *  *  *  * " , " *  *  *  *  *  * "];

for (let element of stars) {
    console.log(element);
};
//
item = " * "
count = 1

while (count <= 6) {
   console.log(item.repeat(count));
    count++;
};
//
let star = 6; 

for (let i = 0; i < star; i++) {
    let row = ' ';
    for (let j = 0; j <= i; j++) {
        row += '*  ';
    }

    console.log(row);
}






