
// function song() {

//     console.log("We start the song at 99 bottles");
//     let bottles = 99
    
//         while( bottles > 0) {
//             let numberOfBottles = parseInt(prompt("How many bottles do you want to take down"));
    
//             if (isNaN(numberOfBottles)){
//                 alert("enter a number");
//             }
    
//             if (numberOfBottles === 1){
//                 console.log(`${bottles} bottles of beer on the wall`);
//                 console.log(`${bottles} bottles of beer`);
//                 bottles--;
//                 console.log(`take ${numberOfBottles} down, pass it around`);
//                 console.log(`${bottles} bottles of beer on the wall`);
//             } else if (numberOfBottles > 1){
//                 console.log(`${bottles} bottles of beer on the wall`);
//                 console.log(`${bottles} bottles of beer`);
//                 bottles -= numberOfBottles;
//                 console.log(`take ${numberOfBottles} down, pass them around`);
//                 console.log(`${bottles} bottles of beer on the wall`);
            
//             } 
//         }
//         if (bottles == 0){
//             console.log("No more bottles of beer on the wall")
//         }
//     }

//    song()

// function song() {

//     let bottles = 99
    
//         while( bottles > 0) {
//             let numberOfBottles = parseInt(prompt("How many bottles do you want to take down"));
    
//             if (isNaN(numberOfBottles)){
//                 alert("enter a number");
//             }
    
//             if (bottles === 1){
//                 console.log(`${numberOfBottles} bottles of beer on the wall`);
//                 console.log(`${numberOfBottles} bottles of beer`);
//                 bottles--;
//                 console.log(`take 1 down, pass it around`);
//                 console.log(`${bottles} bottles of beer on the wall`);
//             } else if (bottles > 1){
//                 console.log(`${bottles} bottles of beer on the wall`);
//                 console.log(`${bottles} bottles of beer`);
//                 bottles -= numberOfBottles;
//                 console.log(`take ${numberOfBottles} down, pass them around`);
//                 console.log(`${bottles} bottles of beer on the wall`);
            
//             } 
//         }
//         if (bottles == 0){
//             console.log("No more bottles of beer on the wall")
      
//         }
    
//     }


// //     song()

function song() {
    let bottles = 99;

    for (let i = 1; bottles > 0; i++) {
        console.log(`${bottles} bottles of beer on the wall`);
        console.log(`${bottles} bottles of beer`);

        console.log(`Take ${i} down, pass ${i === 1 ? 'it' : 'them'} around`);

        bottles -= i;

        console.log(`${bottles} bottles of beer on the wall`);
        console.log();
    }

    console.log("No more bottles of beer on the wall");
}

song();